import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateToeflModuleBase } from "./base/slateToefl.module.base";
import { SlateToeflService } from "./slateToefl.service";
import { SlateToeflController } from "./slateToefl.controller";
import { SlateToeflResolver } from "./slateToefl.resolver";

@Module({
  imports: [SlateToeflModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateToeflController],
  providers: [SlateToeflService, SlateToeflResolver],
  exports: [SlateToeflService],
})
export class SlateToeflModule {}
