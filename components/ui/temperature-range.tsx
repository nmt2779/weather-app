"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider, SliderRange, SliderTrack } from "@radix-ui/react-slider";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const TemperatureRange = React.forwardRef(
  (
    { className, min, max, value, onValueChange, ...props }: SliderProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const [localValues, setLocalValues] = useState(
      Array.isArray(value) ? value : [min, max]
    );

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <Slider
        ref={ref}
        min={min}
        max={max}
        value={localValues}
        disabled={true}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full max-w-[17rem] touch-none select-none items-center md:max-w-[8rem]",
          className
        )}
        {...props}
      >
        <SliderTrack className="relative h-1.5 w-full grow select-none overflow-hidden rounded-full bg-primary/20">
          <SliderRange className="absolute h-full rounded-full bg-gradient-to-r from-cyan-300  to-blue-500" />
        </SliderTrack>
      </Slider>
    );
  }
);

TemperatureRange.displayName = Slider.displayName;

export { TemperatureRange };
