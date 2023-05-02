import { User } from "@prisma/client";

/*
    type safety: instead of setting currentUser as type of User in ff Component interfaces 
    which causes error we modify the ff below to be exact type of what getCurrentUser returns.
*/
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
