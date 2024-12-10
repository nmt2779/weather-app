import { CalendarDaysIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { convertToDate } from "@/lib/dateUtils";
import { TemperatureRange } from "../ui/temperature-range";
import IconComponent from "../ui/icon-component";
import { DailyData } from "@/lib/types";

export default function DailyForecast({ data }: { data: DailyData[] }) {
  const temperatures = data.map((item: DailyData) => item.temp);
  const minTemperature = Math.min(...temperatures.map((temp) => temp.min));
  const maxTemperature = Math.max(...temperatures.map((temp) => temp.max));

  return (
    <Card className="flex flex-col col-span-4">
      <CardHeader>
        <CardTitle className="flex gap-2 items-end ">
          <CalendarDaysIcon className="w-5 h-5" /> Dự báo 7 ngày tới
        </CardTitle>
      </CardHeader>
      <CardContent className="text-lg font-normal grid grid-cols-1 divide-y">
        {data.map((item: DailyData, i) => (
          <div key={item.dt} className="py-4">
            <div className="flex w-full items-center justify-between">
              <span className="w-16 whitespace-nowrap">
                  {i === 0
                    ? "Hôm nay"
                    : convertToDate({ dt: item.dt, weekdayFormat: "long" })}
                </span>
              <IconComponent icon={item.weather[0].icon} className="h-10 w-10 " />
              <div className="w-48 flex flex-row gap-2 overflow-hidden">
                <div className="flex w-full select-none flex-row items-center justify-end gap-2 ">
                  <span>{Math.floor(item.temp.min)}&deg;</span>
                  <TemperatureRange
                    min={minTemperature}
                    max={maxTemperature}
                    value={[item.temp.min, item.temp.max]}
                  />
                  <span>{Math.floor(item.temp.max)}&deg;</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
