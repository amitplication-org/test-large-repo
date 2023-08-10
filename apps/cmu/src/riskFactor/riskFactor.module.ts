import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RiskFactorModuleBase } from "./base/riskFactor.module.base";
import { RiskFactorService } from "./riskFactor.service";
import { RiskFactorController } from "./riskFactor.controller";
import { RiskFactorResolver } from "./riskFactor.resolver";

@Module({
  imports: [RiskFactorModuleBase, forwardRef(() => AuthModule)],
  controllers: [RiskFactorController],
  providers: [RiskFactorService, RiskFactorResolver],
  exports: [RiskFactorService],
})
export class RiskFactorModule {}
