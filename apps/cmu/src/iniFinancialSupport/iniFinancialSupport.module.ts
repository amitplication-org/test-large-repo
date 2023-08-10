import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniFinancialSupportModuleBase } from "./base/iniFinancialSupport.module.base";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";
import { IniFinancialSupportController } from "./iniFinancialSupport.controller";
import { IniFinancialSupportResolver } from "./iniFinancialSupport.resolver";

@Module({
  imports: [IniFinancialSupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [IniFinancialSupportController],
  providers: [IniFinancialSupportService, IniFinancialSupportResolver],
  exports: [IniFinancialSupportService],
})
export class IniFinancialSupportModule {}
