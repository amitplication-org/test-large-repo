import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateRecommendResolverBase } from "./base/slateRecommend.resolver.base";
import { SlateRecommend } from "./base/SlateRecommend";
import { SlateRecommendService } from "./slateRecommend.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateRecommend)
export class SlateRecommendResolver extends SlateRecommendResolverBase {
  constructor(
    protected readonly service: SlateRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
