import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CashnetPaymentService } from "./cashnetPayment.service";
import { CashnetPaymentControllerBase } from "./base/cashnetPayment.controller.base";

@swagger.ApiTags("cashnetPayments")
@common.Controller("cashnetPayments")
export class CashnetPaymentController extends CashnetPaymentControllerBase {
  constructor(
    protected readonly service: CashnetPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
