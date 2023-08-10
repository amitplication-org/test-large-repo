import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateRecommend1ResolverBase } from "./base/slateRecommend1.resolver.base";
import { SlateRecommend1 } from "./base/SlateRecommend1";
import { SlateRecommend1Service } from "./slateRecommend1.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateRecommend1)
export class SlateRecommend1Resolver extends SlateRecommend1ResolverBase {
  constructor(
    protected readonly service: SlateRecommend1Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
