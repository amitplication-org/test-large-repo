import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MergeApplicationModuleBase } from "./base/mergeApplication.module.base";
import { MergeApplicationService } from "./mergeApplication.service";
import { MergeApplicationController } from "./mergeApplication.controller";
import { MergeApplicationResolver } from "./mergeApplication.resolver";

@Module({
  imports: [MergeApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [MergeApplicationController],
  providers: [MergeApplicationService, MergeApplicationResolver],
  exports: [MergeApplicationService],
})
export class MergeApplicationModule {}
