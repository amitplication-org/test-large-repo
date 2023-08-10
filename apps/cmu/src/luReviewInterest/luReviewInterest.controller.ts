import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LuReviewInterestService } from "./luReviewInterest.service";
import { LuReviewInterestControllerBase } from "./base/luReviewInterest.controller.base";

@swagger.ApiTags("luReviewInterests")
@common.Controller("luReviewInterests")
export class LuReviewInterestController extends LuReviewInterestControllerBase {
  constructor(
    protected readonly service: LuReviewInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
