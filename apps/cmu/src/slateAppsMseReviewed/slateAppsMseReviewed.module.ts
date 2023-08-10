import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateAppsMseReviewedModuleBase } from "./base/slateAppsMseReviewed.module.base";
import { SlateAppsMseReviewedService } from "./slateAppsMseReviewed.service";
import { SlateAppsMseReviewedController } from "./slateAppsMseReviewed.controller";
import { SlateAppsMseReviewedResolver } from "./slateAppsMseReviewed.resolver";

@Module({
  imports: [SlateAppsMseReviewedModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateAppsMseReviewedController],
  providers: [SlateAppsMseReviewedService, SlateAppsMseReviewedResolver],
  exports: [SlateAppsMseReviewedService],
})
export class SlateAppsMseReviewedModule {}
