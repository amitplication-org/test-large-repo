import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramUpdateManyWithoutProgramModelsInput } from "./LuApplicationProgramUpdateManyWithoutProgramModelsInput";
import { ProgramsApplicationreqUpdateManyWithoutProgramModelsInput } from "./ProgramsApplicationreqUpdateManyWithoutProgramModelsInput";

export type ProgramModelUpdateInput = {
  baseprice?: number;
  basepriceLate?: number | null;
  degree?: DegreeWhereUniqueInput;
  description?: string | null;
  enabled?: string | null;
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;
  linkword?: string;
  luApplicationPrograms?: LuApplicationProgramUpdateManyWithoutProgramModelsInput;
  oraclestring?: string | null;
  prank?: number;
  programprice?: number;
  programpriceLate?: number | null;
  programsApplicationreqs?: ProgramsApplicationreqUpdateManyWithoutProgramModelsInput;
  registrationoraclestring?: string | null;
  url?: string | null;
};
