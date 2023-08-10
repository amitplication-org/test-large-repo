import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewPositiveFactorOtherModuleBase } from "./base/reviewPositiveFactorOther.module.base";
import { ReviewPositiveFactorOtherService } from "./reviewPositiveFactorOther.service";
import { ReviewPositiveFactorOtherController } from "./reviewPositiveFactorOther.controller";
import { ReviewPositiveFactorOtherResolver } from "./reviewPositiveFactorOther.resolver";

@Module({
  imports: [ReviewPositiveFactorOtherModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewPositiveFactorOtherController],
  providers: [
    ReviewPositiveFactorOtherService,
    ReviewPositiveFactorOtherResolver,
  ],
  exports: [ReviewPositiveFactorOtherService],
})
export class ReviewPositiveFactorOtherModule {}
