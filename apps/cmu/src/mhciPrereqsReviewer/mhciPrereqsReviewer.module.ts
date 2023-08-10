import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsReviewerModuleBase } from "./base/mhciPrereqsReviewer.module.base";
import { MhciPrereqsReviewerService } from "./mhciPrereqsReviewer.service";
import { MhciPrereqsReviewerController } from "./mhciPrereqsReviewer.controller";
import { MhciPrereqsReviewerResolver } from "./mhciPrereqsReviewer.resolver";

@Module({
  imports: [MhciPrereqsReviewerModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsReviewerController],
  providers: [MhciPrereqsReviewerService, MhciPrereqsReviewerResolver],
  exports: [MhciPrereqsReviewerService],
})
export class MhciPrereqsReviewerModule {}
