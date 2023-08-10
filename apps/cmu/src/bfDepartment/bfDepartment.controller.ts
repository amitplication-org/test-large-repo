import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BfDepartmentService } from "./bfDepartment.service";
import { BfDepartmentControllerBase } from "./base/bfDepartment.controller.base";

@swagger.ApiTags("bfDepartments")
@common.Controller("bfDepartments")
export class BfDepartmentController extends BfDepartmentControllerBase {
  constructor(
    protected readonly service: BfDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
