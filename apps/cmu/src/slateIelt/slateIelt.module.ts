import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateIeltModuleBase } from "./base/slateIelt.module.base";
import { SlateIeltService } from "./slateIelt.service";
import { SlateIeltController } from "./slateIelt.controller";
import { SlateIeltResolver } from "./slateIelt.resolver";

@Module({
  imports: [SlateIeltModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateIeltController],
  providers: [SlateIeltService, SlateIeltResolver],
  exports: [SlateIeltService],
})
export class SlateIeltModule {}
