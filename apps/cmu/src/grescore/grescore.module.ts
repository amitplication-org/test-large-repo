import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GrescoreModuleBase } from "./base/grescore.module.base";
import { GrescoreService } from "./grescore.service";
import { GrescoreController } from "./grescore.controller";
import { GrescoreResolver } from "./grescore.resolver";

@Module({
  imports: [GrescoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [GrescoreController],
  providers: [GrescoreService, GrescoreResolver],
  exports: [GrescoreService],
})
export class GrescoreModule {}
