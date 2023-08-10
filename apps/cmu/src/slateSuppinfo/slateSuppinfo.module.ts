import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateSuppinfoModuleBase } from "./base/slateSuppinfo.module.base";
import { SlateSuppinfoService } from "./slateSuppinfo.service";
import { SlateSuppinfoController } from "./slateSuppinfo.controller";
import { SlateSuppinfoResolver } from "./slateSuppinfo.resolver";

@Module({
  imports: [SlateSuppinfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateSuppinfoController],
  providers: [SlateSuppinfoService, SlateSuppinfoResolver],
  exports: [SlateSuppinfoService],
})
export class SlateSuppinfoModule {}
