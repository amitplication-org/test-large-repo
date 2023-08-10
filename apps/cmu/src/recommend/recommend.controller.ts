import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecommendService } from "./recommend.service";
import { RecommendControllerBase } from "./base/recommend.controller.base";

@swagger.ApiTags("recommends")
@common.Controller("recommends")
export class RecommendController extends RecommendControllerBase {
  constructor(
    protected readonly service: RecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
