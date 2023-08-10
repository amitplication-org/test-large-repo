import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramsApplicationreqModuleBase } from "./base/programsApplicationreq.module.base";
import { ProgramsApplicationreqService } from "./programsApplicationreq.service";
import { ProgramsApplicationreqController } from "./programsApplicationreq.controller";
import { ProgramsApplicationreqResolver } from "./programsApplicationreq.resolver";

@Module({
  imports: [ProgramsApplicationreqModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramsApplicationreqController],
  providers: [ProgramsApplicationreqService, ProgramsApplicationreqResolver],
  exports: [ProgramsApplicationreqService],
})
export class ProgramsApplicationreqModule {}
