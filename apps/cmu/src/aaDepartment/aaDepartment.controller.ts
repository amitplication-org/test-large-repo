import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AaDepartmentService } from "./aaDepartment.service";
import { AaDepartmentControllerBase } from "./base/aaDepartment.controller.base";

@swagger.ApiTags("aaDepartments")
@common.Controller("aaDepartments")
export class AaDepartmentController extends AaDepartmentControllerBase {
  constructor(
    protected readonly service: AaDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
