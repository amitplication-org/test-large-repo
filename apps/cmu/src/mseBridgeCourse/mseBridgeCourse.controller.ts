import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MseBridgeCourseService } from "./mseBridgeCourse.service";
import { MseBridgeCourseControllerBase } from "./base/mseBridgeCourse.controller.base";

@swagger.ApiTags("mseBridgeCourses")
@common.Controller("mseBridgeCourses")
export class MseBridgeCourseController extends MseBridgeCourseControllerBase {
  constructor(
    protected readonly service: MseBridgeCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
