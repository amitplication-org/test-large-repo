import { UserModel } from "../userModel/UserModel";

export type LuUsersUsertype = {
  domain: number | null;
  id: number;
  users?: UserModel;
  usertypeId: number;
};
