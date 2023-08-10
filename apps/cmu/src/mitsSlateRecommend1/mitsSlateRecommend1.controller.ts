import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateRecommend1Service } from "./mitsSlateRecommend1.service";
import { MitsSlateRecommend1ControllerBase } from "./base/mitsSlateRecommend1.controller.base";

@swagger.ApiTags("mitsSlateRecommend1s")
@common.Controller("mitsSlateRecommend1s")
export class MitsSlateRecommend1Controller extends MitsSlateRecommend1ControllerBase {
  constructor(
    protected readonly service: MitsSlateRecommend1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
