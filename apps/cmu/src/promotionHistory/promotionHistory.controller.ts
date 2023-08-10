import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PromotionHistoryService } from "./promotionHistory.service";
import { PromotionHistoryControllerBase } from "./base/promotionHistory.controller.base";

@swagger.ApiTags("promotionHistories")
@common.Controller("promotionHistories")
export class PromotionHistoryController extends PromotionHistoryControllerBase {
  constructor(
    protected readonly service: PromotionHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
