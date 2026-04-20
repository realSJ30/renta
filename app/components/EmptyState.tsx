"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
  resetButtonTitle?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters",
  showReset,
  resetButtonTitle = "Remove all filters",
}) => {
  const router = useRouter();

  return (
    <div className="min-h-[50vh] flex flex-col gap-3 justify-center items-center rounded-2xl border border-dashed border-slate-200 bg-white py-16 px-6">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-56 mt-4">
        {showReset && (
          <Button
            outline
            label={resetButtonTitle}
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
