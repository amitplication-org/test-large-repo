export type GmatscoreCreateInput = {
  analyticalwritingpercentile?: number | null;
  analyticalwritingscore?: number | null;
  applicationId: number;
  datafileId?: number | null;
  quantitativepercentile?: number | null;
  quantitativescore?: number | null;
  scorereceived: boolean;
  testdate?: Date | null;
  totalpercentile?: number | null;
  totalscore?: number | null;
  verbalpercentile?: number | null;
  verbalscore?: number | null;
};
