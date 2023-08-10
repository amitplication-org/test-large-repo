import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";
import { LuUsersUsertypeControllerBase } from "./base/luUsersUsertype.controller.base";

@swagger.ApiTags("luUsersUsertypes")
@common.Controller("luUsersUsertypes")
export class LuUsersUsertypeController extends LuUsersUsertypeControllerBase {
  constructor(
    protected readonly service: LuUsersUsertypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
