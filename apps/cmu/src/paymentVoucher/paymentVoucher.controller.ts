import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentVoucherService } from "./paymentVoucher.service";
import { PaymentVoucherControllerBase } from "./base/paymentVoucher.controller.base";

@swagger.ApiTags("paymentVouchers")
@common.Controller("paymentVouchers")
export class PaymentVoucherController extends PaymentVoucherControllerBase {
  constructor(
    protected readonly service: PaymentVoucherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
