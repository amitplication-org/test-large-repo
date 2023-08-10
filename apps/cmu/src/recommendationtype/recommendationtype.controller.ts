import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RecommendationtypeService } from "./recommendationtype.service";
import { RecommendationtypeControllerBase } from "./base/recommendationtype.controller.base";

@swagger.ApiTags("recommendationtypes")
@common.Controller("recommendationtypes")
export class RecommendationtypeController extends RecommendationtypeControllerBase {
  constructor(
    protected readonly service: RecommendationtypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
