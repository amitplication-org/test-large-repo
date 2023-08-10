import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuApplicationProgramService } from "./luApplicationProgram.service";
import { LuApplicationProgramControllerBase } from "./base/luApplicationProgram.controller.base";

@swagger.ApiTags("luApplicationPrograms")
@common.Controller("luApplicationPrograms")
export class LuApplicationProgramController extends LuApplicationProgramControllerBase {
  constructor(
    protected readonly service: LuApplicationProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
