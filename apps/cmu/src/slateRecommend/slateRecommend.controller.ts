import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateRecommendService } from "./slateRecommend.service";
import { SlateRecommendControllerBase } from "./base/slateRecommend.controller.base";

@swagger.ApiTags("slateRecommends")
@common.Controller("slateRecommends")
export class SlateRecommendController extends SlateRecommendControllerBase {
  constructor(
    protected readonly service: SlateRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
