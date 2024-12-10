import { getAirPollutionData } from "@/actions/getAirPollutionData";
import { getHourlyData } from "@/actions/getHourlyData";
import CurrentWeather from "@/components/widgets/CurrentWeather";
import DailyForecast from "@/components/widgets/DailyForecast";
import HourlyForecast from "@/components/widgets/HourlyForecast";
import OtherLargeCities from "@/components/widgets/OtherLargeCities";
import WeatherWidgets from "@/components/widgets/WeatherWidgets";
import { AirPollutionResponse, CurrentAndForecastResponse } from "@/lib/types";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type SearchParamsProps = {
  lat: string;
  lon: string;
  city: string;
};

export async function generateMetadata(
  props: {
    searchParams: Promise<SearchParamsProps>;
  }
): Promise<Metadata> {
  const searchParams = await props.searchParams;
  const { city } = searchParams;

  return {
    title: `${city} - Dự báo thời tiết`,
    description: `Thời tiết ${city} hiện tại và dự báo cho 7 ngày tiếp theo.`,
  };
}

export default async function SearchPage(
  props: {
    searchParams: Promise<SearchParamsProps>;
  }
) {
  const searchParams = await props.searchParams;
  const { lat, lon, city } = searchParams;

  const CurrentAndForecastRequest: CurrentAndForecastResponse =
    await getHourlyData({
      lat,
      lon,
    });

  const AirDataRequest: AirPollutionResponse = await getAirPollutionData({
    lat,
    lon,
  });

  const [currentAndForecastData, air_pullution_data] = await Promise.all([
    CurrentAndForecastRequest,
    AirDataRequest,
  ]);

  if (!currentAndForecastData || !air_pullution_data) return notFound();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
      <div className="col-span-2 2xl:col-span-3 flex min-w-[18rem] flex-col gap-4">
        <CurrentWeather
          data={currentAndForecastData.current}
          timezone_offset={currentAndForecastData.timezone_offset}
          temp_min={currentAndForecastData.daily[0].temp.min}
          temp_max={currentAndForecastData.daily[0].temp.max}
          description={currentAndForecastData.current.weather[0].description}
          city={city}
        />
        <HourlyForecast data={currentAndForecastData.hourly} />
      </div>
      <section className="col-span-2 2xl:col-span-3">
        <DailyForecast data={currentAndForecastData.daily} />
      </section>
      <WeatherWidgets
        currentWeatherData={currentAndForecastData.current}
        airQualityData={air_pullution_data.list[0]}
      />
    </div>
  );
}
