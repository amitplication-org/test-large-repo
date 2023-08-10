import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcTransactionSummaryModuleBase } from "./base/ccTransactionSummary.module.base";
import { CcTransactionSummaryService } from "./ccTransactionSummary.service";
import { CcTransactionSummaryController } from "./ccTransactionSummary.controller";
import { CcTransactionSummaryResolver } from "./ccTransactionSummary.resolver";

@Module({
  imports: [CcTransactionSummaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcTransactionSummaryController],
  providers: [CcTransactionSummaryService, CcTransactionSummaryResolver],
  exports: [CcTransactionSummaryService],
})
export class CcTransactionSummaryModule {}
