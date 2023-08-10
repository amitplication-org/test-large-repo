import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LanguageAssessmentRatingResolverBase } from "./base/languageAssessmentRating.resolver.base";
import { LanguageAssessmentRating } from "./base/LanguageAssessmentRating";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageAssessmentRating)
export class LanguageAssessmentRatingResolver extends LanguageAssessmentRatingResolverBase {
  constructor(
    protected readonly service: LanguageAssessmentRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
