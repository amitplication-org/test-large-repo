import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramTypeModuleBase } from "./base/programType.module.base";
import { ProgramTypeService } from "./programType.service";
import { ProgramTypeController } from "./programType.controller";
import { ProgramTypeResolver } from "./programType.resolver";

@Module({
  imports: [ProgramTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramTypeController],
  providers: [ProgramTypeService, ProgramTypeResolver],
  exports: [ProgramTypeService],
})
export class ProgramTypeModule {}
