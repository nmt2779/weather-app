import AirPollution from "./AirPollution";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  CloudSnowIcon,
  DropletsIcon,
  EyeIcon,
  GaugeIcon,
  SunDimIcon,
  SunsetIcon,
  ThermometerIcon,
} from "lucide-react";
import { formatSunTimeWithAMPM } from "@/lib/dateUtils";
import Compass from "../ui/compass";
import { Progress } from "../ui/progress";
import { AirQualityData, CurrentWeatherData } from "@/lib/types";

export default function WeatherWidgets({
  currentWeatherData,
  airQualityData,
}: {
  currentWeatherData: CurrentWeatherData;
  airQualityData: AirQualityData;
}) {
  const {
    sunrise,
    sunset,
    wind_speed,
    wind_deg,
    uvi,
    pressure,
    visibility,
    humidity,
    feels_like,
    temp,
    rain,
  } = currentWeatherData;

  return (
    <div className="grid grid-cols-subgrid col-span-2 lg:col-span-4 2xl:col-span-6 gap-4">
      <AirPollution
        airQuality={airQualityData}
        className="order-1 col-span-2"
      />

      <Card className="order-2 flex h-48 flex-col justify-between ">
        <CardHeader>
          <CardTitle className="flex items-end">
            <SunsetIcon className="w-5 h-5 mr-2" /> Bình minh
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{formatSunTimeWithAMPM(sunrise)}</p>
        </CardContent>
        <CardFooter>
          <p>Hoàng hôn: {formatSunTimeWithAMPM(sunset)}</p>
        </CardFooter>
      </Card>
      <Card className="order-3 h-48 ">
        <CardHeader>
          <CardTitle>Gió</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-0">
          <Compass speed={wind_speed} deg={wind_deg} />
        </CardContent>
      </Card>
      <Card className="order-4 xl:order-5 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <CloudSnowIcon className="w-5 h-5 mr-1" />
            Lượng mưa
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            {rain?.["1h"] || 0}mm <br></br>trong 3 giờ gần nhất
          </p>
        </CardContent>
        <CardFooter>
          <p>
            {rain?.["1h"] !== undefined
              ? rain["1h"] <= 0.2
                ? "Mưa lất phất, có thể cần đến ô."
                : rain["1h"] <= 2.5
                ? "Mưa nhỏ."
                : "Mưa rào."
              : "Thời tiết khô ráo."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-5 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <ThermometerIcon className="w-5 h-5 mr-1" /> Cảm giác
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{Math.floor(feels_like)}&deg;</p>
        </CardContent>
        <CardFooter>
          <p>
            {feels_like < temp
              ? "Lạnh hơn so với nhiệt độ thực tế."
              : feels_like > temp
              ? "Nóng hơn so với nhiệt độ thực tế."
              : "Giống với nhiệt độ thực tế."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-6 xl:order-4 col-span-2 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <SunDimIcon className="w-5 h-5 mr-1" />
            Chỉ số UV
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress aria-label="UV Index" value={uvi * 10} />
          <p className="">
            {uvi <= 2
              ? "Thấp"
              : uvi <= 5
              ? "Trung bình"
              : uvi <= 7
              ? "Cao"
              : "Rất cao"}
            :&nbsp;{Math.round(uvi)}
          </p>
        </CardContent>
      </Card>
      
      <Card className="order-7 col-span-2 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <GaugeIcon className="w-5 h-5 mr-1" />
            Áp suất
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{pressure} hPa</p>
        </CardContent>
        <CardFooter>
          <p>
            {pressure < 1000
              ? "Áp suất thấp, có thể sắp có thay đổi về thời tiết diễn ra."
              : pressure >= 1000 && pressure <= 1010
              ? "Áp suất trung bình, điều kiện thời tiết bình thường."
              : "Áp suất cao, thời tiết ổn định và quang đãng."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-8 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <DropletsIcon className="w-5 h-5 mr-1" />
            Độ ẩm
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{humidity}%</p>
        </CardContent>
        <CardFooter>
          <p>
            {humidity < 40
              ? "Độ ẩm thấp, cảm giác khô hanh."
              : humidity < 70
              ? "Độ ẩm trung bình, cảm giác dễ chịu."
              : "Độ ẩm cao, cảm giác hơi khó chịu."}
          </p>
        </CardFooter>
      </Card>
      <Card className="order-9 flex h-48 flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex items-end">
            <EyeIcon className="w-5 h-5 mr-1" />
            Tầm nhìn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{visibility / 1000} km</p>
        </CardContent>
        <CardFooter>
          <p>
            {visibility >= 10000
              ? "Trời quang đãng, tầm nhìn xa."
              : visibility >= 5000
              ? "Tầm nhìn tốt."
              : "Tầm nhìn hạn chế. Giảm tốc độ và cẩn thận hơn khi tham gia giao thông."}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
