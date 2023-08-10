import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewPositiveFactorOtherResolverBase } from "./base/reviewPositiveFactorOther.resolver.base";
import { ReviewPositiveFactorOther } from "./base/ReviewPositiveFactorOther";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewPositiveFactorOther)
export class ReviewPositiveFactorOtherResolver extends ReviewPositiveFactorOtherResolverBase {
  constructor(
    protected readonly service: ReviewPositiveFactorOtherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
