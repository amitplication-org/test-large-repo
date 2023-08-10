import { SearchTextWhereInput } from "./SearchTextWhereInput";
import { SearchTextOrderByInput } from "./SearchTextOrderByInput";

export type SearchTextFindManyArgs = {
  where?: SearchTextWhereInput;
  orderBy?: Array<SearchTextOrderByInput>;
  skip?: number;
  take?: number;
};
