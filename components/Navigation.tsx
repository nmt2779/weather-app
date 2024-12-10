"use client";

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
          <SelectCities/>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
