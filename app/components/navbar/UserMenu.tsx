"use client";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useRentModal from "@/app/hooks/useRentModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";

interface IUserMenu {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<IUserMenu> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((val) => !val);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-2">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold text-slate-700 py-2 px-4 rounded-full hover:bg-slate-100 transition cursor-pointer"
        >
          Renta your home
        </div>
        <div
          onClick={toggleOpen}
          className="py-1.5 px-2 border border-slate-200 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md hover:border-slate-300 transition bg-white"
        >
          <AiOutlineMenu className="text-slate-600" />
          <Avatar src={currentUser?.image} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-lg border border-slate-200 w-56 bg-white overflow-hidden right-0 top-14 text-sm z-20">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => {
                    router.push("/trips");
                    toggleOpen();
                  }}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/favorites");
                    toggleOpen();
                  }}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/reservations");
                    toggleOpen();
                  }}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => {
                    router.push("/properties");
                    toggleOpen();
                  }}
                  label="My properties"
                />
                <MenuItem onClick={rentModal.onOpen} label="Renta my home" />
                <hr />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    signOut();
                  }}
                  label="Logout"
                />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
