import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Clock from "../ui/clock";
import { convertToDate } from "@/lib/dateUtils";
import IconComponent from "../ui/icon-component";
import { CurrentWeatherData } from "@/lib/types";
export default function CurrentWeather({
  data,
  timezone_offset,
  temp_min,
  temp_max,
  description,
  city,
}: {
  data: CurrentWeatherData;
  timezone_offset: number;
  temp_min: number;
  temp_max: number;
  description: string;
  city: string;
}) {
  const initial = new Date();

  return (
    <Card className="flex flex-col justify-between h-fit w-full shrink-0 overflow-hidden md:h-[25rem]">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span >
            {convertToDate({
              dt: data.dt,
              weekdayFormat: "long",
            })}
          </span>
          <Clock initial={initial} timezone={timezone_offset} />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center py-10">
        <div>
          <p className="font-bold text-3xl text-center">{city}</p>
          <div className="flex items-center">
            <IconComponent icon={data.weather[0].icon} className="h-12 w-12" />
            <span className="capitalize italic text-lg">{description}</span>
          </div>
        </div>
        <div className="flex justify-center text-9xl font-bold">
          {Math.round(data.temp)}&deg;
        </div>
      </CardContent>

      <CardFooter className="flex gap-4 text-lg">
        <span>
          Thấp nhất:{" "}
          <span className="text-xl font-bold">{Math.round(temp_min)}&deg;</span>
        </span>
        <span>
          Cao nhất:{" "}
          <span className="text-xl font-bold">{Math.round(temp_max)}&deg;</span>
        </span>
      </CardFooter>
    </Card>
  );
}
