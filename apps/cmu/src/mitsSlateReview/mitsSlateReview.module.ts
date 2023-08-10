import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateReviewModuleBase } from "./base/mitsSlateReview.module.base";
import { MitsSlateReviewService } from "./mitsSlateReview.service";
import { MitsSlateReviewController } from "./mitsSlateReview.controller";
import { MitsSlateReviewResolver } from "./mitsSlateReview.resolver";

@Module({
  imports: [MitsSlateReviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateReviewController],
  providers: [MitsSlateReviewService, MitsSlateReviewResolver],
  exports: [MitsSlateReviewService],
})
export class MitsSlateReviewModule {}
