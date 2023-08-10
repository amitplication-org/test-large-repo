import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewPositiveFactorResolverBase } from "./base/reviewPositiveFactor.resolver.base";
import { ReviewPositiveFactor } from "./base/ReviewPositiveFactor";
import { ReviewPositiveFactorService } from "./reviewPositiveFactor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewPositiveFactor)
export class ReviewPositiveFactorResolver extends ReviewPositiveFactorResolverBase {
  constructor(
    protected readonly service: ReviewPositiveFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
