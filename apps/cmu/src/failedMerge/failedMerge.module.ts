import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FailedMergeModuleBase } from "./base/failedMerge.module.base";
import { FailedMergeService } from "./failedMerge.service";
import { FailedMergeController } from "./failedMerge.controller";
import { FailedMergeResolver } from "./failedMerge.resolver";

@Module({
  imports: [FailedMergeModuleBase, forwardRef(() => AuthModule)],
  controllers: [FailedMergeController],
  providers: [FailedMergeService, FailedMergeResolver],
  exports: [FailedMergeService],
})
export class FailedMergeModule {}
