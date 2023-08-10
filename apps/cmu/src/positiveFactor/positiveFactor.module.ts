import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PositiveFactorModuleBase } from "./base/positiveFactor.module.base";
import { PositiveFactorService } from "./positiveFactor.service";
import { PositiveFactorController } from "./positiveFactor.controller";
import { PositiveFactorResolver } from "./positiveFactor.resolver";

@Module({
  imports: [PositiveFactorModuleBase, forwardRef(() => AuthModule)],
  controllers: [PositiveFactorController],
  providers: [PositiveFactorService, PositiveFactorResolver],
  exports: [PositiveFactorService],
})
export class PositiveFactorModule {}
