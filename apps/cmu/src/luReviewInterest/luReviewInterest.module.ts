import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuReviewInterestModuleBase } from "./base/luReviewInterest.module.base";
import { LuReviewInterestService } from "./luReviewInterest.service";
import { LuReviewInterestController } from "./luReviewInterest.controller";
import { LuReviewInterestResolver } from "./luReviewInterest.resolver";

@Module({
  imports: [LuReviewInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuReviewInterestController],
  providers: [LuReviewInterestService, LuReviewInterestResolver],
  exports: [LuReviewInterestService],
})
export class LuReviewInterestModule {}
