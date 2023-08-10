import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgramGroupProgramService } from "./programGroupProgram.service";
import { ProgramGroupProgramControllerBase } from "./base/programGroupProgram.controller.base";

@swagger.ApiTags("programGroupPrograms")
@common.Controller("programGroupPrograms")
export class ProgramGroupProgramController extends ProgramGroupProgramControllerBase {
  constructor(
    protected readonly service: ProgramGroupProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
