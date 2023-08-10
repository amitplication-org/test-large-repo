import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateRecommend2Service } from "./mitsSlateRecommend2.service";
import { MitsSlateRecommend2ControllerBase } from "./base/mitsSlateRecommend2.controller.base";

@swagger.ApiTags("mitsSlateRecommend2s")
@common.Controller("mitsSlateRecommend2s")
export class MitsSlateRecommend2Controller extends MitsSlateRecommend2ControllerBase {
  constructor(
    protected readonly service: MitsSlateRecommend2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
