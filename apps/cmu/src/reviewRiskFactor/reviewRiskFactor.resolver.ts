import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewRiskFactorResolverBase } from "./base/reviewRiskFactor.resolver.base";
import { ReviewRiskFactor } from "./base/ReviewRiskFactor";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewRiskFactor)
export class ReviewRiskFactorResolver extends ReviewRiskFactorResolverBase {
  constructor(
    protected readonly service: ReviewRiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
