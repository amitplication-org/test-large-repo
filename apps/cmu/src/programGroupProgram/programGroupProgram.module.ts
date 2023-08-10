import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramGroupProgramModuleBase } from "./base/programGroupProgram.module.base";
import { ProgramGroupProgramService } from "./programGroupProgram.service";
import { ProgramGroupProgramController } from "./programGroupProgram.controller";
import { ProgramGroupProgramResolver } from "./programGroupProgram.resolver";

@Module({
  imports: [ProgramGroupProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramGroupProgramController],
  providers: [ProgramGroupProgramService, ProgramGroupProgramResolver],
  exports: [ProgramGroupProgramService],
})
export class ProgramGroupProgramModule {}
