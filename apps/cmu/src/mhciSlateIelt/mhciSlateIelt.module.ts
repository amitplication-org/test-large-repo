import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlateIeltModuleBase } from "./base/mhciSlateIelt.module.base";
import { MhciSlateIeltService } from "./mhciSlateIelt.service";
import { MhciSlateIeltController } from "./mhciSlateIelt.controller";
import { MhciSlateIeltResolver } from "./mhciSlateIelt.resolver";

@Module({
  imports: [MhciSlateIeltModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlateIeltController],
  providers: [MhciSlateIeltService, MhciSlateIeltResolver],
  exports: [MhciSlateIeltService],
})
export class MhciSlateIeltModule {}
