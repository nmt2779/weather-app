"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { OTHER_LARGE_CITIES } from "@/lib/config";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function SelectCities() {
  const [open, setOpen] = React.useState(false);
  const searchParams = useSearchParams();

  const cityParam = searchParams.get("city");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {cityParam ? cityParam : "Chọn thành phố ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Tìm kiếm ..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
            <CommandGroup>
              {OTHER_LARGE_CITIES.sort((a, b) => a.city > b.city ? 1 : -1).map(
                (item) => (
                  <CommandItem key={item.city} value={item.city}>
                    <Link
                      key={item.city}
                      scroll={false}
                      href={`/search?lat=${item.coord.lat}&lon=${item.coord.lon}&city=${item.city}`}
                      className="flex w-full items-center"
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          item.city === cityParam ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {item.city}
                    </Link>
                  </CommandItem>
                )
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
