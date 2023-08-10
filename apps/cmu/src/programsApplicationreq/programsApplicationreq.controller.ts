import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";
import { ProgramsApplicationreqControllerBase } from "./base/programsApplicationreq.controller.base";

@swagger.ApiTags("programsApplicationreqs")
@common.Controller("programsApplicationreqs")
export class ProgramsApplicationreqController extends ProgramsApplicationreqControllerBase {
  constructor(
    protected readonly service: ProgramsApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
