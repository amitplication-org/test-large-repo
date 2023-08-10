import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StudentDecisionUniversityService } from "./studentDecisionUniversity.service";
import { StudentDecisionUniversityControllerBase } from "./base/studentDecisionUniversity.controller.base";

@swagger.ApiTags("studentDecisionUniversities")
@common.Controller("studentDecisionUniversities")
export class StudentDecisionUniversityController extends StudentDecisionUniversityControllerBase {
  constructor(
    protected readonly service: StudentDecisionUniversityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
