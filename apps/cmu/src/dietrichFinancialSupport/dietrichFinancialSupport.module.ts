import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DietrichFinancialSupportModuleBase } from "./base/dietrichFinancialSupport.module.base";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";
import { DietrichFinancialSupportController } from "./dietrichFinancialSupport.controller";
import { DietrichFinancialSupportResolver } from "./dietrichFinancialSupport.resolver";

@Module({
  imports: [DietrichFinancialSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [DietrichFinancialSupportController],
  providers: [
    DietrichFinancialSupportService,
    DietrichFinancialSupportResolver,
  ],
  exports: [DietrichFinancialSupportService],
})
export class DietrichFinancialSupportModule {}
