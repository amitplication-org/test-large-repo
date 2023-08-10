import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateRecommend3ResolverBase } from "./base/slateRecommend3.resolver.base";
import { SlateRecommend3 } from "./base/SlateRecommend3";
import { SlateRecommend3Service } from "./slateRecommend3.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateRecommend3)
export class SlateRecommend3Resolver extends SlateRecommend3ResolverBase {
  constructor(
    protected readonly service: SlateRecommend3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
