import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsProgrammingTestModuleBase } from "./base/mhciPrereqsProgrammingTest.module.base";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";
import { MhciPrereqsProgrammingTestController } from "./mhciPrereqsProgrammingTest.controller";
import { MhciPrereqsProgrammingTestResolver } from "./mhciPrereqsProgrammingTest.resolver";

@Module({
  imports: [MhciPrereqsProgrammingTestModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsProgrammingTestController],
  providers: [
    MhciPrereqsProgrammingTestService,
    MhciPrereqsProgrammingTestResolver,
  ],
  exports: [MhciPrereqsProgrammingTestService],
})
export class MhciPrereqsProgrammingTestModule {}
