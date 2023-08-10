import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateRecommend1ResolverBase } from "./base/mitsSlateRecommend1.resolver.base";
import { MitsSlateRecommend1 } from "./base/MitsSlateRecommend1";
import { MitsSlateRecommend1Service } from "./mitsSlateRecommend1.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateRecommend1)
export class MitsSlateRecommend1Resolver extends MitsSlateRecommend1ResolverBase {
  constructor(
    protected readonly service: MitsSlateRecommend1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
