import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateRecommend2ResolverBase } from "./base/mitsSlateRecommend2.resolver.base";
import { MitsSlateRecommend2 } from "./base/MitsSlateRecommend2";
import { MitsSlateRecommend2Service } from "./mitsSlateRecommend2.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateRecommend2)
export class MitsSlateRecommend2Resolver extends MitsSlateRecommend2ResolverBase {
  constructor(
    protected readonly service: MitsSlateRecommend2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
