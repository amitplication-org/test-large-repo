import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateProgramsMseReviewedModuleBase } from "./base/slateProgramsMseReviewed.module.base";
import { SlateProgramsMseReviewedService } from "./slateProgramsMseReviewed.service";
import { SlateProgramsMseReviewedController } from "./slateProgramsMseReviewed.controller";
import { SlateProgramsMseReviewedResolver } from "./slateProgramsMseReviewed.resolver";

@Module({
  imports: [SlateProgramsMseReviewedModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateProgramsMseReviewedController],
  providers: [
    SlateProgramsMseReviewedService,
    SlateProgramsMseReviewedResolver,
  ],
  exports: [SlateProgramsMseReviewedService],
})
export class SlateProgramsMseReviewedModule {}
