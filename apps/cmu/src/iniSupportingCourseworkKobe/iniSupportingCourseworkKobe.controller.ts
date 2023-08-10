import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";
import { IniSupportingCourseworkKobeControllerBase } from "./base/iniSupportingCourseworkKobe.controller.base";

@swagger.ApiTags("iniSupportingCourseworkKobes")
@common.Controller("iniSupportingCourseworkKobes")
export class IniSupportingCourseworkKobeController extends IniSupportingCourseworkKobeControllerBase {
  constructor(
    protected readonly service: IniSupportingCourseworkKobeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
