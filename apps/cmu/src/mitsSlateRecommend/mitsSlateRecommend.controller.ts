import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";
import { MitsSlateRecommendControllerBase } from "./base/mitsSlateRecommend.controller.base";

@swagger.ApiTags("mitsSlateRecommends")
@common.Controller("mitsSlateRecommends")
export class MitsSlateRecommendController extends MitsSlateRecommendControllerBase {
  constructor(
    protected readonly service: MitsSlateRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
