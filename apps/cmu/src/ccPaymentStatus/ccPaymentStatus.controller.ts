import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";
import { CcPaymentStatusControllerBase } from "./base/ccPaymentStatus.controller.base";

@swagger.ApiTags("ccPaymentStatuses")
@common.Controller("ccPaymentStatuses")
export class CcPaymentStatusController extends CcPaymentStatusControllerBase {
  constructor(
    protected readonly service: CcPaymentStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
