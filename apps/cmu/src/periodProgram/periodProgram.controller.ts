import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodProgramService } from "./periodProgram.service";
import { PeriodProgramControllerBase } from "./base/periodProgram.controller.base";

@swagger.ApiTags("periodPrograms")
@common.Controller("periodPrograms")
export class PeriodProgramController extends PeriodProgramControllerBase {
  constructor(
    protected readonly service: PeriodProgramService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
