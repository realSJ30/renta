"use client";
import React from "react";
import { IconType } from "react-icons";

interface IButton {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<IButton> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
            relative
            disabled:opacity-60
            disabled:cursor-not-allowed
            rounded-xl
            transition
            w-full
            border
            ${outline ? "bg-white hover:bg-slate-50 border-slate-300 text-slate-800" : "bg-indigo-600 hover:bg-indigo-700 border-indigo-600 text-white shadow-sm"}
            ${small ? "py-1.5 text-sm font-medium" : "py-3 text-base font-semibold"}
        `}
    >
      {Icon && <Icon size={20} className="absolute left-4 top-1/2 -translate-y-1/2" />}
      {label}
    </button>
  );
};

export default Button;
