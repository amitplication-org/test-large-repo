import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateRecommend3ResolverBase } from "./base/mitsSlateRecommend3.resolver.base";
import { MitsSlateRecommend3 } from "./base/MitsSlateRecommend3";
import { MitsSlateRecommend3Service } from "./mitsSlateRecommend3.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateRecommend3)
export class MitsSlateRecommend3Resolver extends MitsSlateRecommend3ResolverBase {
  constructor(
    protected readonly service: MitsSlateRecommend3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
