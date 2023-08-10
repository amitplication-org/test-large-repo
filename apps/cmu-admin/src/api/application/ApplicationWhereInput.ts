import { LuApplicationProgramListRelationFilter } from "../luApplicationProgram/LuApplicationProgramListRelationFilter";
import { PeriodApplicationListRelationFilter } from "../periodApplication/PeriodApplicationListRelationFilter";

export type ApplicationWhereInput = {
  luApplicationPrograms?: LuApplicationProgramListRelationFilter;
  periodApplication?: PeriodApplicationListRelationFilter;
};
