import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuProgramsRecommendationService } from "./luProgramsRecommendation.service";
import { LuProgramsRecommendationControllerBase } from "./base/luProgramsRecommendation.controller.base";

@swagger.ApiTags("luProgramsRecommendations")
@common.Controller("luProgramsRecommendations")
export class LuProgramsRecommendationController extends LuProgramsRecommendationControllerBase {
  constructor(
    protected readonly service: LuProgramsRecommendationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
