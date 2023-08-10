import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";
import { MitsSlateIeltControllerBase } from "./base/mitsSlateIelt.controller.base";

@swagger.ApiTags("mitsSlateIelts")
@common.Controller("mitsSlateIelts")
export class MitsSlateIeltController extends MitsSlateIeltControllerBase {
  constructor(
    protected readonly service: MitsSlateIeltService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
