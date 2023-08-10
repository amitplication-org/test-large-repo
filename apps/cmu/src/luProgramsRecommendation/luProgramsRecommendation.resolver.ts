import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuProgramsRecommendationResolverBase } from "./base/luProgramsRecommendation.resolver.base";
import { LuProgramsRecommendation } from "./base/LuProgramsRecommendation";
import { LuProgramsRecommendationService } from "./luProgramsRecommendation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuProgramsRecommendation)
export class LuProgramsRecommendationResolver extends LuProgramsRecommendationResolverBase {
  constructor(
    protected readonly service: LuProgramsRecommendationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
