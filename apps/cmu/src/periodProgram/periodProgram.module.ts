import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PeriodProgramModuleBase } from "./base/periodProgram.module.base";
import { PeriodProgramService } from "./periodProgram.service";
import { PeriodProgramController } from "./periodProgram.controller";
import { PeriodProgramResolver } from "./periodProgram.resolver";

@Module({
  imports: [PeriodProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [PeriodProgramController],
  providers: [PeriodProgramService, PeriodProgramResolver],
  exports: [PeriodProgramService],
})
export class PeriodProgramModule {}
