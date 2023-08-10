import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsProgrammingSampleModuleBase } from "./base/mhciPrereqsProgrammingSample.module.base";
import { MhciPrereqsProgrammingSampleService } from "./mhciPrereqsProgrammingSample.service";
import { MhciPrereqsProgrammingSampleController } from "./mhciPrereqsProgrammingSample.controller";
import { MhciPrereqsProgrammingSampleResolver } from "./mhciPrereqsProgrammingSample.resolver";

@Module({
  imports: [
    MhciPrereqsProgrammingSampleModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [MhciPrereqsProgrammingSampleController],
  providers: [
    MhciPrereqsProgrammingSampleService,
    MhciPrereqsProgrammingSampleResolver,
  ],
  exports: [MhciPrereqsProgrammingSampleService],
})
export class MhciPrereqsProgrammingSampleModule {}
