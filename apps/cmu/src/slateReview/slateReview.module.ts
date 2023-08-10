import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateReviewModuleBase } from "./base/slateReview.module.base";
import { SlateReviewService } from "./slateReview.service";
import { SlateReviewController } from "./slateReview.controller";
import { SlateReviewResolver } from "./slateReview.resolver";

@Module({
  imports: [SlateReviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateReviewController],
  providers: [SlateReviewService, SlateReviewResolver],
  exports: [SlateReviewService],
})
export class SlateReviewModule {}
