"use client";

import { OTHER_LARGE_CITIES } from "@/lib/config";
import Link from "next/link";

export default function OtherLargeCities() {
  return (
    <div className="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
      <h3 className="py-3 font-semibold">Các thành phố khác</h3>
      <div className="flex flex-col space-y-3.5 ">
        {OTHER_LARGE_CITIES.map((item) => (
          <Link
            key={item.city}
            scroll={false}
            href={`/search?lat=${item.coord.lat}&lon=${item.coord.lon}&city=${item.city}`}
            className="rounded-lg border bg-gradient-to-tl from-slate-50 to-sky-100 dark:from-slate-700 dark:to-gray-900 px-6 py-4 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {item.city}
          </Link>
        ))}
      </div>
    </div>
  );
}
