import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ToeflModuleBase } from "./base/toefl.module.base";
import { ToeflService } from "./toefl.service";
import { ToeflController } from "./toefl.controller";
import { ToeflResolver } from "./toefl.resolver";

@Module({
  imports: [ToeflModuleBase, forwardRef(() => AuthModule)],
  controllers: [ToeflController],
  providers: [ToeflService, ToeflResolver],
  exports: [ToeflService],
})
export class ToeflModule {}
