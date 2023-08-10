import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewPositiveFactorModuleBase } from "./base/reviewPositiveFactor.module.base";
import { ReviewPositiveFactorService } from "./reviewPositiveFactor.service";
import { ReviewPositiveFactorController } from "./reviewPositiveFactor.controller";
import { ReviewPositiveFactorResolver } from "./reviewPositiveFactor.resolver";

@Module({
  imports: [ReviewPositiveFactorModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewPositiveFactorController],
  providers: [ReviewPositiveFactorService, ReviewPositiveFactorResolver],
  exports: [ReviewPositiveFactorService],
})
export class ReviewPositiveFactorModule {}
