import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramGroupGroupTypeModuleBase } from "./base/programGroupGroupType.module.base";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";
import { ProgramGroupGroupTypeController } from "./programGroupGroupType.controller";
import { ProgramGroupGroupTypeResolver } from "./programGroupGroupType.resolver";

@Module({
  imports: [ProgramGroupGroupTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramGroupGroupTypeController],
  providers: [ProgramGroupGroupTypeService, ProgramGroupGroupTypeResolver],
  exports: [ProgramGroupGroupTypeService],
})
export class ProgramGroupGroupTypeModule {}
