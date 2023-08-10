import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MlSupportingCourseworkService } from "./mlSupportingCoursework.service";
import { MlSupportingCourseworkControllerBase } from "./base/mlSupportingCoursework.controller.base";

@swagger.ApiTags("mlSupportingCourseworks")
@common.Controller("mlSupportingCourseworks")
export class MlSupportingCourseworkController extends MlSupportingCourseworkControllerBase {
  constructor(
    protected readonly service: MlSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
