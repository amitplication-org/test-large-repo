import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramCreateNestedManyWithoutProgramModelsInput } from "./LuApplicationProgramCreateNestedManyWithoutProgramModelsInput";
import { ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput } from "./ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput";

export type ProgramModelCreateInput = {
  baseprice: number;
  basepriceLate?: number | null;
  degree: DegreeWhereUniqueInput;
  description?: string | null;
  enabled?: string | null;
  fieldsofstudy: FieldsofstudyWhereUniqueInput;
  linkword: string;
  luApplicationPrograms?: LuApplicationProgramCreateNestedManyWithoutProgramModelsInput;
  oraclestring?: string | null;
  prank: number;
  programprice: number;
  programpriceLate?: number | null;
  programsApplicationreqs?: ProgramsApplicationreqCreateNestedManyWithoutProgramModelsInput;
  registrationoraclestring?: string | null;
  url?: string | null;
};
