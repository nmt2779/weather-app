"use client";

import { Suspense } from "react";
import { ModeToggle } from "./ModeToggle";
import Search from "./Search";
import { SelectCities } from "./SelectCities";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Suspense
            fallback={
              <div className="w-[250px] lg:w-[350px] h-10 bg-gray-200 animate-pulse rounded"></div>
            }
          >
            <SelectCities />
          </Suspense>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
