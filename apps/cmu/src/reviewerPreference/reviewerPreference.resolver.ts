import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReviewerPreferenceResolverBase } from "./base/reviewerPreference.resolver.base";
import { ReviewerPreference } from "./base/ReviewerPreference";
import { ReviewerPreferenceService } from "./reviewerPreference.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReviewerPreference)
export class ReviewerPreferenceResolver extends ReviewerPreferenceResolverBase {
  constructor(
    protected readonly service: ReviewerPreferenceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
