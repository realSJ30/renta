"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import querystring from "query-string";

export interface ICategoryBox {
  label: string;
  icon: IconType;
  description?: string;
  selected?: boolean;
}

const CategoryBox: React.FC<ICategoryBox> = ({
  description,
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = querystring.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = querystring.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-1.5 px-3 py-2 border-b-2 transition cursor-pointer shrink-0
      ${selected ? "border-indigo-600 text-indigo-700" : "border-transparent text-slate-500 hover:text-slate-800 hover:border-slate-200"}
      `}
    >
      <Icon size={22} />
      <div className="font-medium text-xs whitespace-nowrap">{label}</div>
    </div>
  );
};

export default CategoryBox;
