import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentItemService } from "./paymentItem.service";
import { PaymentItemControllerBase } from "./base/paymentItem.controller.base";

@swagger.ApiTags("paymentItems")
@common.Controller("paymentItems")
export class PaymentItemController extends PaymentItemControllerBase {
  constructor(
    protected readonly service: PaymentItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
