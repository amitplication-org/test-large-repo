import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewIniOverallScaleResolverBase } from "./base/reviewIniOverallScale.resolver.base";
import { ReviewIniOverallScale } from "./base/ReviewIniOverallScale";
import { ReviewIniOverallScaleService } from "./reviewIniOverallScale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewIniOverallScale)
export class ReviewIniOverallScaleResolver extends ReviewIniOverallScaleResolverBase {
  constructor(
    protected readonly service: ReviewIniOverallScaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
