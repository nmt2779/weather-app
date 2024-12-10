import { weatherIconMappings } from "@/lib/iconMap";
import Image from "next/image";

interface WeatherIconProps {
    weatherCode: any
    x?: any
    className?: string
  }

export default function WeatherIcon({weatherCode, x, className}: WeatherIconProps){

    const iconNameKey = x ? `${weatherCode}${x}` : weatherCode
    const iconName = weatherIconMappings[iconNameKey]

    return (
    <div className={`relative invert-0 dark:invert ${className}`}>
      <Image
        fill
        alt={weatherCode}
        src={`/icons/wi-${iconName}.svg`}
        className="select-none"
      />
    </div>
    )
}