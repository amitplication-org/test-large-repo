import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateRecommend2ResolverBase } from "./base/slateRecommend2.resolver.base";
import { SlateRecommend2 } from "./base/SlateRecommend2";
import { SlateRecommend2Service } from "./slateRecommend2.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateRecommend2)
export class SlateRecommend2Resolver extends SlateRecommend2ResolverBase {
  constructor(
    protected readonly service: SlateRecommend2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
