import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuDomainDepartmentService } from "./luDomainDepartment.service";
import { LuDomainDepartmentControllerBase } from "./base/luDomainDepartment.controller.base";

@swagger.ApiTags("luDomainDepartments")
@common.Controller("luDomainDepartments")
export class LuDomainDepartmentController extends LuDomainDepartmentControllerBase {
  constructor(
    protected readonly service: LuDomainDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
