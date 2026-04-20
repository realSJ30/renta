"use client";
import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Anywhere";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);

      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Days`;
    }

    return "Any Week";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Guests`;
    }

    return "Add Guests";
  }, [guestCount]);

  return (
    <div
      onClick={searchModal.onOpen}
      className="group border border-slate-200 bg-white w-full py-1.5 pl-2 pr-1.5 rounded-full shadow-sm hover:shadow-md hover:border-slate-300 transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold text-slate-800 px-4 truncate">
          {locationLabel}
        </div>
        <div className="hidden sm:block text-sm font-semibold text-slate-700 px-4 border-x border-slate-200 text-center truncate">
          {durationLabel}
        </div>
        <div className="text-sm pl-4 pr-1 text-slate-500 flex flex-row items-center gap-2">
          <div className="hidden md:block truncate">{guestLabel}</div>
          <div className="p-2 bg-indigo-600 group-hover:bg-indigo-700 rounded-full text-white transition">
            <BiSearch size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
