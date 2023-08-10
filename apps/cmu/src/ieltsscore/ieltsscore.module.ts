import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IeltsscoreModuleBase } from "./base/ieltsscore.module.base";
import { IeltsscoreService } from "./ieltsscore.service";
import { IeltsscoreController } from "./ieltsscore.controller";
import { IeltsscoreResolver } from "./ieltsscore.resolver";

@Module({
  imports: [IeltsscoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [IeltsscoreController],
  providers: [IeltsscoreService, IeltsscoreResolver],
  exports: [IeltsscoreService],
})
export class IeltsscoreModule {}
