import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromotionHistoryCopyService } from "./promotionHistoryCopy.service";
import { PromotionHistoryCopyControllerBase } from "./base/promotionHistoryCopy.controller.base";

@swagger.ApiTags("promotionHistoryCopies")
@common.Controller("promotionHistoryCopies")
export class PromotionHistoryCopyController extends PromotionHistoryCopyControllerBase {
  constructor(
    protected readonly service: PromotionHistoryCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
