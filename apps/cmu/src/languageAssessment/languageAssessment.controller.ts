import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LanguageAssessmentService } from "./languageAssessment.service";
import { LanguageAssessmentControllerBase } from "./base/languageAssessment.controller.base";

@swagger.ApiTags("languageAssessments")
@common.Controller("languageAssessments")
export class LanguageAssessmentController extends LanguageAssessmentControllerBase {
  constructor(
    protected readonly service: LanguageAssessmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
