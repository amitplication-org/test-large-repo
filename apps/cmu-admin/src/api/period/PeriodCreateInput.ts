import { PeriodApplicationCreateNestedManyWithoutPeriodsInput } from "./PeriodApplicationCreateNestedManyWithoutPeriodsInput";

export type PeriodCreateInput = {
  description?: string | null;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  periodApplication?: PeriodApplicationCreateNestedManyWithoutPeriodsInput;
  periodTypeId: number;
  startDate: Date;
  unitId: number;
};
