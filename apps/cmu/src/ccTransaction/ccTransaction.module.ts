import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcTransactionModuleBase } from "./base/ccTransaction.module.base";
import { CcTransactionService } from "./ccTransaction.service";
import { CcTransactionController } from "./ccTransaction.controller";
import { CcTransactionResolver } from "./ccTransaction.resolver";

@Module({
  imports: [CcTransactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcTransactionController],
  providers: [CcTransactionService, CcTransactionResolver],
  exports: [CcTransactionService],
})
export class CcTransactionModule {}
