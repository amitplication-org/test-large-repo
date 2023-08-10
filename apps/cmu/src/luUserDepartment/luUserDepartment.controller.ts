import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuUserDepartmentService } from "./luUserDepartment.service";
import { LuUserDepartmentControllerBase } from "./base/luUserDepartment.controller.base";

@swagger.ApiTags("luUserDepartments")
@common.Controller("luUserDepartments")
export class LuUserDepartmentController extends LuUserDepartmentControllerBase {
  constructor(
    protected readonly service: LuUserDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
