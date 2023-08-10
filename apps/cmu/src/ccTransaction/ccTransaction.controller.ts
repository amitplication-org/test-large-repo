import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CcTransactionService } from "./ccTransaction.service";
import { CcTransactionControllerBase } from "./base/ccTransaction.controller.base";

@swagger.ApiTags("ccTransactions")
@common.Controller("ccTransactions")
export class CcTransactionController extends CcTransactionControllerBase {
  constructor(
    protected readonly service: CcTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
