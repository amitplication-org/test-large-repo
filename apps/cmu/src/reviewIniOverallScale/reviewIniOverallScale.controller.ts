import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewIniOverallScaleService } from "./reviewIniOverallScale.service";
import { ReviewIniOverallScaleControllerBase } from "./base/reviewIniOverallScale.controller.base";

@swagger.ApiTags("reviewIniOverallScales")
@common.Controller("reviewIniOverallScales")
export class ReviewIniOverallScaleController extends ReviewIniOverallScaleControllerBase {
  constructor(
    protected readonly service: ReviewIniOverallScaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
