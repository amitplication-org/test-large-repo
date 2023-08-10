import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlateGreModuleBase } from "./base/mhciSlateGre.module.base";
import { MhciSlateGreService } from "./mhciSlateGre.service";
import { MhciSlateGreController } from "./mhciSlateGre.controller";
import { MhciSlateGreResolver } from "./mhciSlateGre.resolver";

@Module({
  imports: [MhciSlateGreModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlateGreController],
  providers: [MhciSlateGreService, MhciSlateGreResolver],
  exports: [MhciSlateGreService],
})
export class MhciSlateGreModule {}
