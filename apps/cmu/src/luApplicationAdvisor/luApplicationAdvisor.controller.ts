import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";
import { LuApplicationAdvisorControllerBase } from "./base/luApplicationAdvisor.controller.base";

@swagger.ApiTags("luApplicationAdvisors")
@common.Controller("luApplicationAdvisors")
export class LuApplicationAdvisorController extends LuApplicationAdvisorControllerBase {
  constructor(
    protected readonly service: LuApplicationAdvisorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
