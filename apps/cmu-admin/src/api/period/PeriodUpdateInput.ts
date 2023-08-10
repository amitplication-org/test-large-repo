import { PeriodApplicationUpdateManyWithoutPeriodsInput } from "./PeriodApplicationUpdateManyWithoutPeriodsInput";

export type PeriodUpdateInput = {
  description?: string | null;
  endDate?: Date | null;
  parentPeriodId?: number | null;
  periodApplication?: PeriodApplicationUpdateManyWithoutPeriodsInput;
  periodTypeId?: number;
  startDate?: Date;
  unitId?: number;
};
