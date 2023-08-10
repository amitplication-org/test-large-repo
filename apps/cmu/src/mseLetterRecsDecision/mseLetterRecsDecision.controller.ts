import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseLetterRecsDecisionService } from "./mseLetterRecsDecision.service";
import { MseLetterRecsDecisionControllerBase } from "./base/mseLetterRecsDecision.controller.base";

@swagger.ApiTags("mseLetterRecsDecisions")
@common.Controller("mseLetterRecsDecisions")
export class MseLetterRecsDecisionController extends MseLetterRecsDecisionControllerBase {
  constructor(
    protected readonly service: MseLetterRecsDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
