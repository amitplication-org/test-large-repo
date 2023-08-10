import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";
import { IniSupportingCourseworkControllerBase } from "./base/iniSupportingCoursework.controller.base";

@swagger.ApiTags("iniSupportingCourseworks")
@common.Controller("iniSupportingCourseworks")
export class IniSupportingCourseworkController extends IniSupportingCourseworkControllerBase {
  constructor(
    protected readonly service: IniSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
