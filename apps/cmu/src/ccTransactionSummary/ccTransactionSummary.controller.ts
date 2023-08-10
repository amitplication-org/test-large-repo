import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CcTransactionSummaryService } from "./ccTransactionSummary.service";
import { CcTransactionSummaryControllerBase } from "./base/ccTransactionSummary.controller.base";

@swagger.ApiTags("ccTransactionSummaries")
@common.Controller("ccTransactionSummaries")
export class CcTransactionSummaryController extends CcTransactionSummaryControllerBase {
  constructor(
    protected readonly service: CcTransactionSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
