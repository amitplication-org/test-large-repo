import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IniSopService } from "./iniSop.service";
import { IniSopControllerBase } from "./base/iniSop.controller.base";

@swagger.ApiTags("iniSops")
@common.Controller("iniSops")
export class IniSopController extends IniSopControllerBase {
  constructor(
    protected readonly service: IniSopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
