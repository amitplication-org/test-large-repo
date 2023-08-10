import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";
import { MhciSlateAppSchoolControllerBase } from "./base/mhciSlateAppSchool.controller.base";

@swagger.ApiTags("mhciSlateAppSchools")
@common.Controller("mhciSlateAppSchools")
export class MhciSlateAppSchoolController extends MhciSlateAppSchoolControllerBase {
  constructor(
    protected readonly service: MhciSlateAppSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
