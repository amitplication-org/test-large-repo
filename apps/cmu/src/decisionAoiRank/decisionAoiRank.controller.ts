import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecisionAoiRankService } from "./decisionAoiRank.service";
import { DecisionAoiRankControllerBase } from "./base/decisionAoiRank.controller.base";

@swagger.ApiTags("decisionAoiRanks")
@common.Controller("decisionAoiRanks")
export class DecisionAoiRankController extends DecisionAoiRankControllerBase {
  constructor(
    protected readonly service: DecisionAoiRankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
