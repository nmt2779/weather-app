import { ClassNameValue } from "tailwind-merge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { FanIcon } from "lucide-react";
import { Progress } from "../ui/progress";
import { AirQualityData } from "@/lib/types";

interface AirPollutionProps {
  airQuality: AirQualityData;
  className?: ClassNameValue;
}

export default function AirPollution({
  airQuality,
  className,
}: AirPollutionProps) {
  return (
    <Card
      className={cn(
        "flex h-48 flex-col justify-between",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="flex items-end">
          <FanIcon className="w-5 h-5 mr-2" /> Chất lượng không khí
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress
          aria-label="Air pollution"
          value={(airQuality.main.aqi - 1) * 24}
        />
        <p>
          {airQuality.main.aqi === 1
            ? "Chất lượng không khí tốt."
            : airQuality.main.aqi === 2
            ? "Chất lượng ở mức vừa phải."
            : airQuality.main.aqi === 3
            ? "Chất lượng không khí ở mức trung bình."
            : airQuality.main.aqi === 4
            ? "Chất lượng không khí tệ."
            : "Chất lượng không khí rất tệ"}
        </p>
      </CardContent>
    </Card>
  );
}
