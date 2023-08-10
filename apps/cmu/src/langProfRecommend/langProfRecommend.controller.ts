import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LangProfRecommendService } from "./langProfRecommend.service";
import { LangProfRecommendControllerBase } from "./base/langProfRecommend.controller.base";

@swagger.ApiTags("langProfRecommends")
@common.Controller("langProfRecommends")
export class LangProfRecommendController extends LangProfRecommendControllerBase {
  constructor(
    protected readonly service: LangProfRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
