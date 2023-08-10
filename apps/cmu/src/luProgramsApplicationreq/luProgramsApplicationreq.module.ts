import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuProgramsApplicationreqModuleBase } from "./base/luProgramsApplicationreq.module.base";
import { LuProgramsApplicationreqService } from "./luProgramsApplicationreq.service";
import { LuProgramsApplicationreqController } from "./luProgramsApplicationreq.controller";
import { LuProgramsApplicationreqResolver } from "./luProgramsApplicationreq.resolver";

@Module({
  imports: [LuProgramsApplicationreqModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuProgramsApplicationreqController],
  providers: [
    LuProgramsApplicationreqService,
    LuProgramsApplicationreqResolver,
  ],
  exports: [LuProgramsApplicationreqService],
})
export class LuProgramsApplicationreqModule {}
