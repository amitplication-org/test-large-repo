import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateToeflModuleBase } from "./base/mitsSlateToefl.module.base";
import { MitsSlateToeflService } from "./mitsSlateToefl.service";
import { MitsSlateToeflController } from "./mitsSlateToefl.controller";
import { MitsSlateToeflResolver } from "./mitsSlateToefl.resolver";

@Module({
  imports: [MitsSlateToeflModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateToeflController],
  providers: [MitsSlateToeflService, MitsSlateToeflResolver],
  exports: [MitsSlateToeflService],
})
export class MitsSlateToeflModule {}
