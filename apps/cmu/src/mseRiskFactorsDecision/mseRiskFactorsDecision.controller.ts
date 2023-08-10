import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";
import { MseRiskFactorsDecisionControllerBase } from "./base/mseRiskFactorsDecision.controller.base";

@swagger.ApiTags("mseRiskFactorsDecisions")
@common.Controller("mseRiskFactorsDecisions")
export class MseRiskFactorsDecisionController extends MseRiskFactorsDecisionControllerBase {
  constructor(
    protected readonly service: MseRiskFactorsDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
