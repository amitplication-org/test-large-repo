import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewIniExperienceScaleService } from "./reviewIniExperienceScale.service";
import { ReviewIniExperienceScaleControllerBase } from "./base/reviewIniExperienceScale.controller.base";

@swagger.ApiTags("reviewIniExperienceScales")
@common.Controller("reviewIniExperienceScales")
export class ReviewIniExperienceScaleController extends ReviewIniExperienceScaleControllerBase {
  constructor(
    protected readonly service: ReviewIniExperienceScaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
