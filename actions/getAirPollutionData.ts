import { unstable_noStore as noStore } from "next/cache";

export const getAirPollutionData = async ({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) => {
  noStore();

  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
  );

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
};
