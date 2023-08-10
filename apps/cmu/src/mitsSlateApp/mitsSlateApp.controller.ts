import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateAppService } from "./mitsSlateApp.service";
import { MitsSlateAppControllerBase } from "./base/mitsSlateApp.controller.base";

@swagger.ApiTags("mitsSlateApps")
@common.Controller("mitsSlateApps")
export class MitsSlateAppController extends MitsSlateAppControllerBase {
  constructor(
    protected readonly service: MitsSlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
