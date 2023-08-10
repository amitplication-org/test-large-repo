import { Application } from "../application/Application";
import { ProgramModel } from "../programModel/ProgramModel";

export type LuApplicationProgram = {
  admissionStatus: string | null;
  admit: string | null;
  admitComments: string | null;
  application?: Application;
  choice: number;
  decision: string | null;
  faccontact: string | null;
  id: number;
  ltichoice: string | null;
  programs?: ProgramModel;
  round2: string | null;
  scholarshipAmt: number | null;
  scholarshipComments: string | null;
  stucontact: string | null;
};
