import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";
import { ReviewPositiveFactorOtherControllerBase } from "./base/reviewPositiveFactorOther.controller.base";

@swagger.ApiTags("reviewPositiveFactorOthers")
@common.Controller("reviewPositiveFactorOthers")
export class ReviewPositiveFactorOtherController extends ReviewPositiveFactorOtherControllerBase {
  constructor(
    protected readonly service: ReviewPositiveFactorOtherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
