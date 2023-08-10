import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CcTransactionDetailService } from "./ccTransactionDetail.service";
import { CcTransactionDetailControllerBase } from "./base/ccTransactionDetail.controller.base";

@swagger.ApiTags("ccTransactionDetails")
@common.Controller("ccTransactionDetails")
export class CcTransactionDetailController extends CcTransactionDetailControllerBase {
  constructor(
    protected readonly service: CcTransactionDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
