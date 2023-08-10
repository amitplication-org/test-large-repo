import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";
import { LuProgramsApplicationreqControllerBase } from "./base/luProgramsApplicationreq.controller.base";

@swagger.ApiTags("luProgramsApplicationreqs")
@common.Controller("luProgramsApplicationreqs")
export class LuProgramsApplicationreqController extends LuProgramsApplicationreqControllerBase {
  constructor(
    protected readonly service: LuProgramsApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
