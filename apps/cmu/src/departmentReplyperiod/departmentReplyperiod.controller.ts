import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";
import { DepartmentReplyperiodControllerBase } from "./base/departmentReplyperiod.controller.base";

@swagger.ApiTags("departmentReplyperiods")
@common.Controller("departmentReplyperiods")
export class DepartmentReplyperiodController extends DepartmentReplyperiodControllerBase {
  constructor(
    protected readonly service: DepartmentReplyperiodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
