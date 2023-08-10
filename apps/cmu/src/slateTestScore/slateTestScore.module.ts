import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateTestScoreModuleBase } from "./base/slateTestScore.module.base";
import { SlateTestScoreService } from "./slateTestScore.service";
import { SlateTestScoreController } from "./slateTestScore.controller";
import { SlateTestScoreResolver } from "./slateTestScore.resolver";

@Module({
  imports: [SlateTestScoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateTestScoreController],
  providers: [SlateTestScoreService, SlateTestScoreResolver],
  exports: [SlateTestScoreService],
})
export class SlateTestScoreModule {}
