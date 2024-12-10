import { unstable_noStore as noStore } from "next/cache";

export const getHourlyData = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  noStore();

  const data = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&lang=vi&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
