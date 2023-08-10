import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";
import { MseBridgeCourseDecisionControllerBase } from "./base/mseBridgeCourseDecision.controller.base";

@swagger.ApiTags("mseBridgeCourseDecisions")
@common.Controller("mseBridgeCourseDecisions")
export class MseBridgeCourseDecisionController extends MseBridgeCourseDecisionControllerBase {
  constructor(
    protected readonly service: MseBridgeCourseDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
