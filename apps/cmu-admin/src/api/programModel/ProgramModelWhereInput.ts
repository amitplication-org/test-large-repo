import { DegreeWhereUniqueInput } from "../degree/DegreeWhereUniqueInput";
import { FieldsofstudyWhereUniqueInput } from "../fieldsofstudy/FieldsofstudyWhereUniqueInput";
import { LuApplicationProgramListRelationFilter } from "../luApplicationProgram/LuApplicationProgramListRelationFilter";
import { ProgramsApplicationreqListRelationFilter } from "../programsApplicationreq/ProgramsApplicationreqListRelationFilter";

export type ProgramModelWhereInput = {
  degree?: DegreeWhereUniqueInput;
  fieldsofstudy?: FieldsofstudyWhereUniqueInput;
  luApplicationPrograms?: LuApplicationProgramListRelationFilter;
  programsApplicationreqs?: ProgramsApplicationreqListRelationFilter;
};
