import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateLangCodeModuleBase } from "./base/slateLangCode.module.base";
import { SlateLangCodeService } from "./slateLangCode.service";
import { SlateLangCodeController } from "./slateLangCode.controller";
import { SlateLangCodeResolver } from "./slateLangCode.resolver";

@Module({
  imports: [SlateLangCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateLangCodeController],
  providers: [SlateLangCodeService, SlateLangCodeResolver],
  exports: [SlateLangCodeService],
})
export class SlateLangCodeModule {}
