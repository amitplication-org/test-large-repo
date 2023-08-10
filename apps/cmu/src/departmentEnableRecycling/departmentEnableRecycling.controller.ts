import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";
import { DepartmentEnableRecyclingControllerBase } from "./base/departmentEnableRecycling.controller.base";

@swagger.ApiTags("departmentEnableRecyclings")
@common.Controller("departmentEnableRecyclings")
export class DepartmentEnableRecyclingController extends DepartmentEnableRecyclingControllerBase {
  constructor(
    protected readonly service: DepartmentEnableRecyclingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
