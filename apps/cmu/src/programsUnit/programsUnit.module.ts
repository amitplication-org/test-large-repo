import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramsUnitModuleBase } from "./base/programsUnit.module.base";
import { ProgramsUnitService } from "./programsUnit.service";
import { ProgramsUnitController } from "./programsUnit.controller";
import { ProgramsUnitResolver } from "./programsUnit.resolver";

@Module({
  imports: [ProgramsUnitModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramsUnitController],
  providers: [ProgramsUnitService, ProgramsUnitResolver],
  exports: [ProgramsUnitService],
})
export class ProgramsUnitModule {}
