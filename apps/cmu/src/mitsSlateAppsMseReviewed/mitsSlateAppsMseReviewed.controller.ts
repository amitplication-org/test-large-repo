import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";
import { MitsSlateAppsMseReviewedControllerBase } from "./base/mitsSlateAppsMseReviewed.controller.base";

@swagger.ApiTags("mitsSlateAppsMseRevieweds")
@common.Controller("mitsSlateAppsMseRevieweds")
export class MitsSlateAppsMseReviewedController extends MitsSlateAppsMseReviewedControllerBase {
  constructor(
    protected readonly service: MitsSlateAppsMseReviewedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
