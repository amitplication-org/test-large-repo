import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateAppSchoolService } from "./slateAppSchool.service";
import { SlateAppSchoolControllerBase } from "./base/slateAppSchool.controller.base";

@swagger.ApiTags("slateAppSchools")
@common.Controller("slateAppSchools")
export class SlateAppSchoolController extends SlateAppSchoolControllerBase {
  constructor(
    protected readonly service: SlateAppSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
