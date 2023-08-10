import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeachingExperienceService } from "./teachingExperience.service";
import { TeachingExperienceControllerBase } from "./base/teachingExperience.controller.base";

@swagger.ApiTags("teachingExperiences")
@common.Controller("teachingExperiences")
export class TeachingExperienceController extends TeachingExperienceControllerBase {
  constructor(
    protected readonly service: TeachingExperienceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
