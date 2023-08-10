import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcTransactionDetailModuleBase } from "./base/ccTransactionDetail.module.base";
import { CcTransactionDetailService } from "./ccTransactionDetail.service";
import { CcTransactionDetailController } from "./ccTransactionDetail.controller";
import { CcTransactionDetailResolver } from "./ccTransactionDetail.resolver";

@Module({
  imports: [CcTransactionDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcTransactionDetailController],
  providers: [CcTransactionDetailService, CcTransactionDetailResolver],
  exports: [CcTransactionDetailService],
})
export class CcTransactionDetailModule {}
