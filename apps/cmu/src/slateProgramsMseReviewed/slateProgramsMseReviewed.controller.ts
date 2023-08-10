import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";
import { SlateProgramsMseReviewedControllerBase } from "./base/slateProgramsMseReviewed.controller.base";

@swagger.ApiTags("slateProgramsMseRevieweds")
@common.Controller("slateProgramsMseRevieweds")
export class SlateProgramsMseReviewedController extends SlateProgramsMseReviewedControllerBase {
  constructor(
    protected readonly service: SlateProgramsMseReviewedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
