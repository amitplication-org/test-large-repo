import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewPositiveFactorService } from "./reviewPositiveFactor.service";
import { ReviewPositiveFactorControllerBase } from "./base/reviewPositiveFactor.controller.base";

@swagger.ApiTags("reviewPositiveFactors")
@common.Controller("reviewPositiveFactors")
export class ReviewPositiveFactorController extends ReviewPositiveFactorControllerBase {
  constructor(
    protected readonly service: ReviewPositiveFactorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
