import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewIniModuleBase } from "./base/reviewIni.module.base";
import { ReviewIniService } from "./reviewIni.service";
import { ReviewIniController } from "./reviewIni.controller";
import { ReviewIniResolver } from "./reviewIni.resolver";

@Module({
  imports: [ReviewIniModuleBase, forwardRef(() => AuthModule)],
  controllers: [ReviewIniController],
  providers: [ReviewIniService, ReviewIniResolver],
  exports: [ReviewIniService],
})
export class ReviewIniModule {}
