import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";
import { LuApplicationStartSemesterControllerBase } from "./base/luApplicationStartSemester.controller.base";

@swagger.ApiTags("luApplicationStartSemesters")
@common.Controller("luApplicationStartSemesters")
export class LuApplicationStartSemesterController extends LuApplicationStartSemesterControllerBase {
  constructor(
    protected readonly service: LuApplicationStartSemesterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
