export function convertToDate({
  dt,
  weekdayFormat,
}: {
  dt: number;
  weekdayFormat: "short" | "long";
}): string {
  let local_time = new Date(dt * 1000);

  const options = { weekday: weekdayFormat };
  const dateFormatter = new Intl.DateTimeFormat("vi-VN", options);

  return dateFormatter.format(local_time);
}

export function formatSunTimeWithAMPM(
  timestamp: number
  // timezoneOffset: number
): string {
  const date = new Date(timestamp * 1000);
  const formattedTime = new Intl.DateTimeFormat("vi-VN", {
    // timeZone: "UTC",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
  return formattedTime;
}
