export type ToeflItpPlusCreateInput = {
  applicationId: number;
  datafileId?: number | null;
  listeningscore?: number | null;
  overallscore?: number | null;
  readingscore?: number | null;
  scorereceived?: number | null;
  testdate?: Date | null;
  url?: string | null;
  writingscore?: number | null;
};
