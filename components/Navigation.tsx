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
              <div className="w-[250px] lg:w-[350px] h-9 bg-gray-100  rounded"></div>
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
