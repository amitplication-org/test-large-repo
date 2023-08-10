import { LuUsersUsertypeUpdateManyWithoutUserModelsInput } from "./LuUsersUsertypeUpdateManyWithoutUserModelsInput";

export type UserModelUpdateInput = {
  email?: string;
  firstname?: string;
  guid?: string;
  initials?: string | null;
  lastname?: string;
  luUsersUsertypes?: LuUsersUsertypeUpdateManyWithoutUserModelsInput;
  middlename?: string | null;
  password?: string;
  signupDate?: Date;
  title?: string | null;
  username?: string;
  verified?: boolean;
};
