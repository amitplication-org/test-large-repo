import { PeriodApplication } from "../periodApplication/PeriodApplication";

export type Period = {
  description: string | null;
  endDate: Date | null;
  id: number;
  parentPeriodId: number | null;
  periodApplication?: Array<PeriodApplication>;
  periodTypeId: number;
  startDate: Date;
  unitId: number;
};
