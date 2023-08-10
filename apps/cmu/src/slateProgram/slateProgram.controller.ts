import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateProgramService } from "./slateProgram.service";
import { SlateProgramControllerBase } from "./base/slateProgram.controller.base";

@swagger.ApiTags("slatePrograms")
@common.Controller("slatePrograms")
export class SlateProgramController extends SlateProgramControllerBase {
  constructor(
    protected readonly service: SlateProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
