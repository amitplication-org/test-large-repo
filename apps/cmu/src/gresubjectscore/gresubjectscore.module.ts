import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GresubjectscoreModuleBase } from "./base/gresubjectscore.module.base";
import { GresubjectscoreService } from "./gresubjectscore.service";
import { GresubjectscoreController } from "./gresubjectscore.controller";
import { GresubjectscoreResolver } from "./gresubjectscore.resolver";

@Module({
  imports: [GresubjectscoreModuleBase, forwardRef(() => AuthModule)],
  controllers: [GresubjectscoreController],
  providers: [GresubjectscoreService, GresubjectscoreResolver],
  exports: [GresubjectscoreService],
})
export class GresubjectscoreModule {}
