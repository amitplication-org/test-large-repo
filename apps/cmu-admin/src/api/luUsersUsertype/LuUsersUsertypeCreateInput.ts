import { UserModelWhereUniqueInput } from "../userModel/UserModelWhereUniqueInput";

export type LuUsersUsertypeCreateInput = {
  domain?: number | null;
  users: UserModelWhereUniqueInput;
  usertypeId: number;
};
