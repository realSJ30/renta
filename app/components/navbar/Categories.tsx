"use client";
import { usePathname, useSearchParams } from "next/navigation";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { BsSnow } from "react-icons/bs";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { FaSkiing } from "react-icons/fa";
import Container from "../Container";
import CategoryBox, { ICategoryBox } from "./CategoryBox";

export const categories: ICategoryBox[] = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "Property close to beach.",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "Property has windmills.",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "Modern properties.",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "Property in countryside.",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "Property has pools.",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "Property in island.",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "Property close to a lake.",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "Property has skiing activities.",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "Property in a castle.",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "Property has camping activities.",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "Property in arctic.",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "Property close to cave.",
  },
  {
    label: "Dessert",
    icon: GiCactus,
    description: "Property in a dessert.",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "Property has barn.",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "Property is luxurious.",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((categoryItem: ICategoryBox, index: number) => {
          return (
            <CategoryBox
              key={index}
              label={categoryItem.label}
              selected={category === categoryItem.label}
              icon={categoryItem.icon}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Categories;
