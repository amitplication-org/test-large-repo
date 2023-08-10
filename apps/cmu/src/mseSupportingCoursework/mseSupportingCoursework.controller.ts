import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";
import { MseSupportingCourseworkControllerBase } from "./base/mseSupportingCoursework.controller.base";

@swagger.ApiTags("mseSupportingCourseworks")
@common.Controller("mseSupportingCourseworks")
export class MseSupportingCourseworkController extends MseSupportingCourseworkControllerBase {
  constructor(
    protected readonly service: MseSupportingCourseworkService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
