import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateRecommendResolverBase } from "./base/mitsSlateRecommend.resolver.base";
import { MitsSlateRecommend } from "./base/MitsSlateRecommend";
import { MitsSlateRecommendService } from "./mitsSlateRecommend.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateRecommend)
export class MitsSlateRecommendResolver extends MitsSlateRecommendResolverBase {
  constructor(
    protected readonly service: MitsSlateRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
