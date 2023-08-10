import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuProgramsInterestService } from "./luProgramsInterest.service";
import { LuProgramsInterestControllerBase } from "./base/luProgramsInterest.controller.base";

@swagger.ApiTags("luProgramsInterests")
@common.Controller("luProgramsInterests")
export class LuProgramsInterestController extends LuProgramsInterestControllerBase {
  constructor(
    protected readonly service: LuProgramsInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
