import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateAppsMseReviewedModuleBase } from "./base/mitsSlateAppsMseReviewed.module.base";
import { MitsSlateAppsMseReviewedService } from "./mitsSlateAppsMseReviewed.service";
import { MitsSlateAppsMseReviewedController } from "./mitsSlateAppsMseReviewed.controller";
import { MitsSlateAppsMseReviewedResolver } from "./mitsSlateAppsMseReviewed.resolver";

@Module({
  imports: [MitsSlateAppsMseReviewedModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateAppsMseReviewedController],
  providers: [
    MitsSlateAppsMseReviewedService,
    MitsSlateAppsMseReviewedResolver,
  ],
  exports: [MitsSlateAppsMseReviewedService],
})
export class MitsSlateAppsMseReviewedModule {}
