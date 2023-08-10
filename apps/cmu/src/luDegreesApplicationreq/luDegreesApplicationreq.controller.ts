import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuDegreesApplicationreqService } from "./luDegreesApplicationreq.service";
import { LuDegreesApplicationreqControllerBase } from "./base/luDegreesApplicationreq.controller.base";

@swagger.ApiTags("luDegreesApplicationreqs")
@common.Controller("luDegreesApplicationreqs")
export class LuDegreesApplicationreqController extends LuDegreesApplicationreqControllerBase {
  constructor(
    protected readonly service: LuDegreesApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
