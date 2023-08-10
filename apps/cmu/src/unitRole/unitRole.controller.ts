import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UnitRoleService } from "./unitRole.service";
import { UnitRoleControllerBase } from "./base/unitRole.controller.base";

@swagger.ApiTags("unitRoles")
@common.Controller("unitRoles")
export class UnitRoleController extends UnitRoleControllerBase {
  constructor(
    protected readonly service: UnitRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
