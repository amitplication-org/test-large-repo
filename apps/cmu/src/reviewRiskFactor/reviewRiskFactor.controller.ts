import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewRiskFactorService } from "./reviewRiskFactor.service";
import { ReviewRiskFactorControllerBase } from "./base/reviewRiskFactor.controller.base";

@swagger.ApiTags("reviewRiskFactors")
@common.Controller("reviewRiskFactors")
export class ReviewRiskFactorController extends ReviewRiskFactorControllerBase {
  constructor(
    protected readonly service: ReviewRiskFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
