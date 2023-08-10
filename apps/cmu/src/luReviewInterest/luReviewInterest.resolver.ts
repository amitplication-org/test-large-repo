import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuReviewInterestResolverBase } from "./base/luReviewInterest.resolver.base";
import { LuReviewInterest } from "./base/LuReviewInterest";
import { LuReviewInterestService } from "./luReviewInterest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuReviewInterest)
export class LuReviewInterestResolver extends LuReviewInterestResolverBase {
  constructor(
    protected readonly service: LuReviewInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
