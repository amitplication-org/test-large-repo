import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SemPreviousCourseService } from "./semPreviousCourse.service";
import { SemPreviousCourseControllerBase } from "./base/semPreviousCourse.controller.base";

@swagger.ApiTags("semPreviousCourses")
@common.Controller("semPreviousCourses")
export class SemPreviousCourseController extends SemPreviousCourseControllerBase {
  constructor(
    protected readonly service: SemPreviousCourseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
