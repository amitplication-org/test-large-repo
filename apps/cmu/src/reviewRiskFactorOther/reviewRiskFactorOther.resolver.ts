import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewRiskFactorOtherResolverBase } from "./base/reviewRiskFactorOther.resolver.base";
import { ReviewRiskFactorOther } from "./base/ReviewRiskFactorOther";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewRiskFactorOther)
export class ReviewRiskFactorOtherResolver extends ReviewRiskFactorOtherResolverBase {
  constructor(
    protected readonly service: ReviewRiskFactorOtherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
