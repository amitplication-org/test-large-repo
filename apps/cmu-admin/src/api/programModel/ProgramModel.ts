import { Degree } from "../degree/Degree";
import { Fieldsofstudy } from "../fieldsofstudy/Fieldsofstudy";
import { LuApplicationProgram } from "../luApplicationProgram/LuApplicationProgram";
import { ProgramsApplicationreq } from "../programsApplicationreq/ProgramsApplicationreq";

export type ProgramModel = {
  baseprice: number;
  basepriceLate: number | null;
  degree?: Degree;
  description: string | null;
  enabled: string | null;
  fieldsofstudy?: Fieldsofstudy;
  id: number;
  linkword: string;
  luApplicationPrograms?: Array<LuApplicationProgram>;
  oraclestring: string | null;
  prank: number;
  programprice: number;
  programpriceLate: number | null;
  programsApplicationreqs?: Array<ProgramsApplicationreq>;
  registrationoraclestring: string | null;
  url: string | null;
};
