import { LuUsersUsertypeCreateNestedManyWithoutUserModelsInput } from "./LuUsersUsertypeCreateNestedManyWithoutUserModelsInput";

export type UserModelCreateInput = {
  email: string;
  firstname: string;
  guid: string;
  initials?: string | null;
  lastname: string;
  luUsersUsertypes?: LuUsersUsertypeCreateNestedManyWithoutUserModelsInput;
  middlename?: string | null;
  password: string;
  signupDate: Date;
  title?: string | null;
  username: string;
  verified: boolean;
};
