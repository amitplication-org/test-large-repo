import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramGroupTypeModuleBase } from "./base/programGroupType.module.base";
import { ProgramGroupTypeService } from "./programGroupType.service";
import { ProgramGroupTypeController } from "./programGroupType.controller";
import { ProgramGroupTypeResolver } from "./programGroupType.resolver";

@Module({
  imports: [ProgramGroupTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramGroupTypeController],
  providers: [ProgramGroupTypeService, ProgramGroupTypeResolver],
  exports: [ProgramGroupTypeService],
})
export class ProgramGroupTypeModule {}
