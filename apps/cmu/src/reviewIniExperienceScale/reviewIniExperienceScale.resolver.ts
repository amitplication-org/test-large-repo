import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewIniExperienceScaleResolverBase } from "./base/reviewIniExperienceScale.resolver.base";
import { ReviewIniExperienceScale } from "./base/ReviewIniExperienceScale";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewIniExperienceScale)
export class ReviewIniExperienceScaleResolver extends ReviewIniExperienceScaleResolverBase {
  constructor(
    protected readonly service: ReviewIniExperienceScaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
