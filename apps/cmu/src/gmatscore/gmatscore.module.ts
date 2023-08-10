import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GmatscoreModuleBase } from "./base/gmatscore.module.base";
import { GmatscoreService } from "./gmatscore.service";
import { GmatscoreController } from "./gmatscore.controller";
import { GmatscoreResolver } from "./gmatscore.resolver";

@Module({
  imports: [GmatscoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [GmatscoreController],
  providers: [GmatscoreService, GmatscoreResolver],
  exports: [GmatscoreService],
})
export class GmatscoreModule {}
