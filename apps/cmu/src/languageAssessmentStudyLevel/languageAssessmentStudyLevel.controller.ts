import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageAssessmentStudyLevelService } from "./languageAssessmentStudyLevel.service";
import { LanguageAssessmentStudyLevelControllerBase } from "./base/languageAssessmentStudyLevel.controller.base";

@swagger.ApiTags("languageAssessmentStudyLevels")
@common.Controller("languageAssessmentStudyLevels")
export class LanguageAssessmentStudyLevelController extends LanguageAssessmentStudyLevelControllerBase {
  constructor(
    protected readonly service: LanguageAssessmentStudyLevelService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
