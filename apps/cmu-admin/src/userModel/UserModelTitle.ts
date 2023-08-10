import { UserModel as TUserModel } from "../api/userModel/UserModel";

export const USERMODEL_TITLE_FIELD = "firstname";

export const UserModelTitle = (record: TUserModel): string => {
  return record.firstname || String(record.id);
};
