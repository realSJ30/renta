"use client";
import React, { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import querystring from "query-string";
import { IconType } from "react-icons";
import {
  TbBeach,
  TbMountain,
  TbPool,
  TbBuildingSkyscraper,
} from "react-icons/tb";
import { GiIsland, GiCastle } from "react-icons/gi";

interface Destination {
  label: string;
  category: string;
  subtitle: string;
  icon: IconType;
  gradient: string;
}

const destinations: Destination[] = [
  {
    label: "Coastal escapes",
    category: "Beach",
    subtitle: "Sun-soaked shores",
    icon: TbBeach,
    gradient: "from-sky-400 to-cyan-600",
  },
  {
    label: "Mountain retreats",
    category: "Countryside",
    subtitle: "Peaceful highlands",
    icon: TbMountain,
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    label: "Private pools",
    category: "Pools",
    subtitle: "Dive right in",
    icon: TbPool,
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    label: "Remote islands",
    category: "Islands",
    subtitle: "Off-the-grid paradise",
    icon: GiIsland,
    gradient: "from-amber-400 to-orange-600",
  },
  {
    label: "Modern stays",
    category: "Modern",
    subtitle: "City living, elevated",
    icon: TbBuildingSkyscraper,
    gradient: "from-slate-600 to-slate-900",
  },
  {
    label: "Castle nights",
    category: "Castles",
    subtitle: "Storybook getaways",
    icon: GiCastle,
    gradient: "from-fuchsia-500 to-purple-700",
  },
];

const FeaturedDestinations = () => {
  const router = useRouter();
  const params = useSearchParams();

  const goTo = useCallback(
    (category: string) => {
      const current = params ? querystring.parse(params.toString()) : {};
      const url = querystring.stringifyUrl(
        { url: "/", query: { ...current, category } },
        { skipNull: true }
      );
      router.push(url);
    },
    [params, router]
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
      {destinations.map((d) => {
        const Icon = d.icon;
        return (
          <button
            key={d.label}
            onClick={() => goTo(d.category)}
            className="group relative overflow-hidden rounded-2xl aspect-[5/3] text-left border border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${d.gradient}`}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition" />
            <div
              aria-hidden
              className="absolute -right-6 -bottom-6 text-white/15"
            >
              <Icon size={140} />
            </div>
            <div className="relative h-full flex flex-col justify-between p-4 md:p-5 text-white">
              <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Icon size={18} />
              </div>
              <div>
                <div className="text-xs opacity-80">{d.subtitle}</div>
                <div className="text-base md:text-lg font-semibold">
                  {d.label}
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default FeaturedDestinations;
