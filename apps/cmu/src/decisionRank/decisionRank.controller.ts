import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecisionRankService } from "./decisionRank.service";
import { DecisionRankControllerBase } from "./base/decisionRank.controller.base";

@swagger.ApiTags("decisionRanks")
@common.Controller("decisionRanks")
export class DecisionRankController extends DecisionRankControllerBase {
  constructor(
    protected readonly service: DecisionRankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
