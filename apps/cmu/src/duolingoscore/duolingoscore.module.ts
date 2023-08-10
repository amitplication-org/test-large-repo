import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DuolingoscoreModuleBase } from "./base/duolingoscore.module.base";
import { DuolingoscoreService } from "./duolingoscore.service";
import { DuolingoscoreController } from "./duolingoscore.controller";
import { DuolingoscoreResolver } from "./duolingoscore.resolver";

@Module({
  imports: [DuolingoscoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [DuolingoscoreController],
  providers: [DuolingoscoreService, DuolingoscoreResolver],
  exports: [DuolingoscoreService],
})
export class DuolingoscoreModule {}
