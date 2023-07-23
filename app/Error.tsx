"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const Error: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState
      title="Something went wrong!"
      subtitle="Try refreshing the page"
    />
  );
};

export default Error;
