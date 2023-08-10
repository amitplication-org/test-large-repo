import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Em2FinancialSupportModuleBase } from "./base/em2FinancialSupport.module.base";
import { Em2FinancialSupportService } from "./em2FinancialSupport.service";
import { Em2FinancialSupportController } from "./em2FinancialSupport.controller";
import { Em2FinancialSupportResolver } from "./em2FinancialSupport.resolver";

@Module({
  imports: [Em2FinancialSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [Em2FinancialSupportController],
  providers: [Em2FinancialSupportService, Em2FinancialSupportResolver],
  exports: [Em2FinancialSupportService],
})
export class Em2FinancialSupportModule {}
