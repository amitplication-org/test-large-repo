import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProgramModelModuleBase } from "./base/programModel.module.base";
import { ProgramModelService } from "./programModel.service";
import { ProgramModelController } from "./programModel.controller";
import { ProgramModelResolver } from "./programModel.resolver";

@Module({
  imports: [ProgramModelModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProgramModelController],
  providers: [ProgramModelService, ProgramModelResolver],
  exports: [ProgramModelService],
})
export class ProgramModelModule {}
