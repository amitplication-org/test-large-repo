import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlacklistReviewerModuleBase } from "./base/blacklistReviewer.module.base";
import { BlacklistReviewerService } from "./blacklistReviewer.service";
import { BlacklistReviewerController } from "./blacklistReviewer.controller";
import { BlacklistReviewerResolver } from "./blacklistReviewer.resolver";

@Module({
  imports: [BlacklistReviewerModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlacklistReviewerController],
  providers: [BlacklistReviewerService, BlacklistReviewerResolver],
  exports: [BlacklistReviewerService],
})
export class BlacklistReviewerModule {}
