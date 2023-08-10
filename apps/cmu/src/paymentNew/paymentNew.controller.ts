import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PaymentNewService } from "./paymentNew.service";
import { PaymentNewControllerBase } from "./base/paymentNew.controller.base";

@swagger.ApiTags("paymentNews")
@common.Controller("paymentNews")
export class PaymentNewController extends PaymentNewControllerBase {
  constructor(
    protected readonly service: PaymentNewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
