import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcTransactionReportModuleBase } from "./base/ccTransactionReport.module.base";
import { CcTransactionReportService } from "./ccTransactionReport.service";
import { CcTransactionReportController } from "./ccTransactionReport.controller";
import { CcTransactionReportResolver } from "./ccTransactionReport.resolver";

@Module({
  imports: [CcTransactionReportModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcTransactionReportController],
  providers: [CcTransactionReportService, CcTransactionReportResolver],
  exports: [CcTransactionReportService],
})
export class CcTransactionReportModule {}
