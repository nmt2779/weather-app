"use client";

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { Card } from "../ui/card";
import IconComponent from "../ui/icon-component";
import { HourlyData } from "@/lib/types";

interface HourlyForecastProps {
  data: HourlyData[];
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  function extractHoursFromDate(dt: number): number {
    const date = new Date(dt * 1000);
    return date.getHours();
  }

  const ref =
    useRef<HTMLDivElement>(undefined) as React.MutableRefObject<HTMLInputElement>;

  const { events } = useDraggable(ref, {
    safeDisplacement: 2,
  });

  return (
    <>
      <Card
        ref={ref}
        {...events}
        tabIndex={0}
        className="flex flex-row h-full items-center justify-between cursor-grab touch-auto touch-pan-x select-none scroll-px-0.5 gap-12 overflow-hidden overscroll-contain scroll-smooth p-4 ring-offset-background transition-colors scrollbar-hide hover:overflow-x-auto focus:scroll-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 "
      >
        {data.slice(0, 24).map((item: HourlyData, i) => (
          <div key={item.dt} className="flex h-full flex-col justify-between gap-8 font-semibold text-lg">
            <div className="flex whitespace-nowrap justify-center ">
              {i === 0 ? "Hiện tại" : extractHoursFromDate(item.dt) + "h"}
            </div>
            <div className="flex h-full items-center justify-center">
              <IconComponent icon={item.weather[0].icon} className="h-12 w-12" />
            </div>
            <div className="flex justify-center">
              {Math.floor(item.temp)}&deg;
            </div>
          </div>
        ))}
      </Card>
    </>
  );
}
