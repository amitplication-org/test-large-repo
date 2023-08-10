import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseRiskFactorModuleBase } from "./base/mseRiskFactor.module.base";
import { MseRiskFactorService } from "./mseRiskFactor.service";
import { MseRiskFactorController } from "./mseRiskFactor.controller";
import { MseRiskFactorResolver } from "./mseRiskFactor.resolver";

@Module({
  imports: [MseRiskFactorModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseRiskFactorController],
  providers: [MseRiskFactorService, MseRiskFactorResolver],
  exports: [MseRiskFactorService],
})
export class MseRiskFactorModule {}
