import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewRiskFactorOtherService } from "./reviewRiskFactorOther.service";
import { ReviewRiskFactorOtherControllerBase } from "./base/reviewRiskFactorOther.controller.base";

@swagger.ApiTags("reviewRiskFactorOthers")
@common.Controller("reviewRiskFactorOthers")
export class ReviewRiskFactorOtherController extends ReviewRiskFactorOtherControllerBase {
  constructor(
    protected readonly service: ReviewRiskFactorOtherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
