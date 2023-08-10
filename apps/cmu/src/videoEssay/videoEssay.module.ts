import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VideoEssayModuleBase } from "./base/videoEssay.module.base";
import { VideoEssayService } from "./videoEssay.service";
import { VideoEssayController } from "./videoEssay.controller";
import { VideoEssayResolver } from "./videoEssay.resolver";

@Module({
  imports: [VideoEssayModuleBase, forwardRef(() => AuthModule)],
  controllers: [VideoEssayController],
  providers: [VideoEssayService, VideoEssayResolver],
  exports: [VideoEssayService],
})
export class VideoEssayModule {}
