import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramModuleBase } from "./base/program.module.base";
import { ProgramService } from "./program.service";
import { ProgramController } from "./program.controller";
import { ProgramResolver } from "./program.resolver";

@Module({
  imports: [ProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramController],
  providers: [ProgramService, ProgramResolver],
  exports: [ProgramService],
})
export class ProgramModule {}
