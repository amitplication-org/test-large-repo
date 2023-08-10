import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateIeltModuleBase } from "./base/mitsSlateIelt.module.base";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";
import { MitsSlateIeltController } from "./mitsSlateIelt.controller";
import { MitsSlateIeltResolver } from "./mitsSlateIelt.resolver";

@Module({
  imports: [MitsSlateIeltModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateIeltController],
  providers: [MitsSlateIeltService, MitsSlateIeltResolver],
  exports: [MitsSlateIeltService],
})
export class MitsSlateIeltModule {}
