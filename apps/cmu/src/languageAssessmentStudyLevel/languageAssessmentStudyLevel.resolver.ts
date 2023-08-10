import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LanguageAssessmentStudyLevelResolverBase } from "./base/languageAssessmentStudyLevel.resolver.base";
import { LanguageAssessmentStudyLevel } from "./base/LanguageAssessmentStudyLevel";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageAssessmentStudyLevel)
export class LanguageAssessmentStudyLevelResolver extends LanguageAssessmentStudyLevelResolverBase {
  constructor(
    protected readonly service: LanguageAssessmentStudyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
