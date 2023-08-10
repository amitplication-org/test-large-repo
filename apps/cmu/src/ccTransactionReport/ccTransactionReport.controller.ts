import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CcTransactionReportService } from "./ccTransactionReport.service";
import { CcTransactionReportControllerBase } from "./base/ccTransactionReport.controller.base";

@swagger.ApiTags("ccTransactionReports")
@common.Controller("ccTransactionReports")
export class CcTransactionReportController extends CcTransactionReportControllerBase {
  constructor(
    protected readonly service: CcTransactionReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
