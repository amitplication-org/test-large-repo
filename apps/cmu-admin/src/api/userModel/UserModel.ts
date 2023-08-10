import { LuUsersUsertype } from "../luUsersUsertype/LuUsersUsertype";

export type UserModel = {
  email: string;
  firstname: string;
  guid: string;
  id: number;
  initials: string | null;
  lastname: string;
  luUsersUsertypes?: Array<LuUsersUsertype>;
  middlename: string | null;
  password: string;
  signupDate: Date;
  title: string | null;
  username: string;
  verified: boolean;
};
