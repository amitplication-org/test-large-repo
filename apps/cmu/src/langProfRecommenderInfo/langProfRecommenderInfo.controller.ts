import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LangProfRecommenderInfoService } from "./langProfRecommenderInfo.service";
import { LangProfRecommenderInfoControllerBase } from "./base/langProfRecommenderInfo.controller.base";

@swagger.ApiTags("langProfRecommenderInfos")
@common.Controller("langProfRecommenderInfos")
export class LangProfRecommenderInfoController extends LangProfRecommenderInfoControllerBase {
  constructor(
    protected readonly service: LangProfRecommenderInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
