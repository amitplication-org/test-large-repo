import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LanguageAssessmentResolverBase } from "./base/languageAssessment.resolver.base";
import { LanguageAssessment } from "./base/LanguageAssessment";
import { LanguageAssessmentService } from "./languageAssessment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LanguageAssessment)
export class LanguageAssessmentResolver extends LanguageAssessmentResolverBase {
  constructor(
    protected readonly service: LanguageAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
