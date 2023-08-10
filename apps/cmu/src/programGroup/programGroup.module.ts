import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramGroupModuleBase } from "./base/programGroup.module.base";
import { ProgramGroupService } from "./programGroup.service";
import { ProgramGroupController } from "./programGroup.controller";
import { ProgramGroupResolver } from "./programGroup.resolver";

@Module({
  imports: [ProgramGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramGroupController],
  providers: [ProgramGroupService, ProgramGroupResolver],
  exports: [ProgramGroupService],
})
export class ProgramGroupModule {}
