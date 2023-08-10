import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseInterviewModuleBase } from "./base/mseInterview.module.base";
import { MseInterviewService } from "./mseInterview.service";
import { MseInterviewController } from "./mseInterview.controller";
import { MseInterviewResolver } from "./mseInterview.resolver";

@Module({
  imports: [MseInterviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseInterviewController],
  providers: [MseInterviewService, MseInterviewResolver],
  exports: [MseInterviewService],
})
export class MseInterviewModule {}
