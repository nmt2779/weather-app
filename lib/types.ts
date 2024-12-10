export type Location = {
  city: string;
  coord: Coordinates;
};

type Weather = {
  id: number; // Weather condition id (https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
  main: string; // Group of weather parameters (Rain, Snow etc.)
  description: string; // Weather condition within the group
  icon: string;
}[];

export type HourlyData = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather;
  rain?: Rain;
  pop: number; // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
};

type Rain = {
  "1h": number; // mm/h
};

type Snow = {
  "1h": number; // mm/h
};

export type CurrentWeatherData = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number; // Humidity, %
  dew_point: number;
  uvi: number; //  Current UV index.
  clouds: number; // Cloudiness, %
  visibility: number;
  wind_speed: number; // Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
  wind_deg: number;
  wind_gust?: number;
  weather: Weather;
  rain?: Rain;
  snow?: Snow;
};

type TempData = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

type FeelsLike = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

export type DailyData = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: TempData;
  feels_like: FeelsLike;
  pressure: number;
  humidity: number; // Humidity, %
  dew_point: number;
  wind_speed: number; // Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
  wind_deg: number;
  wind_gust?: number;
  weather: Weather;
  clouds: number;
  pop: number;
  rain: number;
  uvi: number;
};

export type CurrentAndForecastResponse = {
  lat: string;
  lon: string;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeatherData;
  hourly: HourlyData[];
  daily: DailyData[];
};

export type AirPollutionResponse = {
  coord: Coordinates;
  list: AirQualityData[];
};

type Coordinates = {
  lon: string;
  lat: string;
};

export type AirQualityData = {
  dt: number;
  main: {
    aqi: 1 | 2 | 3 | 4 | 5;
  };
  components: {
    co: number; // Concentration of CO (Carbon monoxide), μg/m3
    no: number; // Concentration of NO (Nitrogen monoxide), μg/m3
    no2: number; // Concentration of NO2 (Nitrogen dioxide), μg/m3
    o3: number; // Concentration of O3 (Ozone), μg/m3
    so2: number; // Concentration of SO2 (Sulphur dioxide), μg/m3
    pm2_5: number; // Concentration of PM2.5 (Fine particles matter), μg/m3
    pm10: number; // Concentration of PM10 (Coarse particulate matter), μg/m3
    nh3: number; // Concentration of NH3 (Ammonia), μg/m3
  };
};
