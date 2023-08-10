import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";
import { ApplicationDecisionSchoolControllerBase } from "./base/applicationDecisionSchool.controller.base";

@swagger.ApiTags("applicationDecisionSchools")
@common.Controller("applicationDecisionSchools")
export class ApplicationDecisionSchoolController extends ApplicationDecisionSchoolControllerBase {
  constructor(
    protected readonly service: ApplicationDecisionSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
