import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageAssessmentRatingService } from "./languageAssessmentRating.service";
import { LanguageAssessmentRatingControllerBase } from "./base/languageAssessmentRating.controller.base";

@swagger.ApiTags("languageAssessmentRatings")
@common.Controller("languageAssessmentRatings")
export class LanguageAssessmentRatingController extends LanguageAssessmentRatingControllerBase {
  constructor(
    protected readonly service: LanguageAssessmentRatingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
