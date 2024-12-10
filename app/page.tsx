import { Metadata } from "next";
import { DEFAULT_LOCATION } from "@/lib/config";
import CurrentWeather from "@/components/widgets/CurrentWeather";
import { getHourlyData } from "@/actions/getHourlyData";
import { getAirPollutionData } from "@/actions/getAirPollutionData";
import { notFound } from "next/navigation";
import WeatherWidgets from "@/components/widgets/WeatherWidgets";
import HourlyForecast from "@/components/widgets/HourlyForecast";
import DailyForecast from "@/components/widgets/DailyForecast";
import { AirPollutionResponse, CurrentAndForecastResponse } from "@/lib/types";

export const metadata: Metadata = {
  title: `${DEFAULT_LOCATION.city} - Dự báo thời tiết`,
  description: `Thời tiết ${DEFAULT_LOCATION.city} hiện tại và dự báo cho 7 ngày tiếp theo.`,
};

export default async function Home() {
  const { lat, lon } = DEFAULT_LOCATION.coord;
  const city = DEFAULT_LOCATION.city;

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
