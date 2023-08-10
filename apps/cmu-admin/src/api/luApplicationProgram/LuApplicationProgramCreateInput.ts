import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ProgramModelWhereUniqueInput } from "../programModel/ProgramModelWhereUniqueInput";

export type LuApplicationProgramCreateInput = {
  admissionStatus?: string | null;
  admit?: string | null;
  admitComments?: string | null;
  application: ApplicationWhereUniqueInput;
  choice: number;
  decision?: string | null;
  faccontact?: string | null;
  ltichoice?: string | null;
  programs: ProgramModelWhereUniqueInput;
  round2?: string | null;
  scholarshipAmt?: number | null;
  scholarshipComments?: string | null;
  stucontact?: string | null;
};
