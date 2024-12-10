import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateLocalTime(
  initialTime: Date,
  offsetSeconds: number
): Date {
  // Calculate the local time by adjusting the initial time with the offset
  const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000);

  return localTime;
}
