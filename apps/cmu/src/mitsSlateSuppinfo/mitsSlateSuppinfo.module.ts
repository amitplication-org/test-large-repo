import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateSuppinfoModuleBase } from "./base/mitsSlateSuppinfo.module.base";
import { MitsSlateSuppinfoService } from "./mitsSlateSuppinfo.service";
import { MitsSlateSuppinfoController } from "./mitsSlateSuppinfo.controller";
import { MitsSlateSuppinfoResolver } from "./mitsSlateSuppinfo.resolver";

@Module({
  imports: [MitsSlateSuppinfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateSuppinfoController],
  providers: [MitsSlateSuppinfoService, MitsSlateSuppinfoResolver],
  exports: [MitsSlateSuppinfoService],
})
export class MitsSlateSuppinfoModule {}
