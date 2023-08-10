import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StudentDecisionService } from "./studentDecision.service";
import { StudentDecisionControllerBase } from "./base/studentDecision.controller.base";

@swagger.ApiTags("studentDecisions")
@common.Controller("studentDecisions")
export class StudentDecisionController extends StudentDecisionControllerBase {
  constructor(
    protected readonly service: StudentDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
