import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationProgramModuleBase } from "./base/luApplicationProgram.module.base";
import { LuApplicationProgramService } from "./luApplicationProgram.service";
import { LuApplicationProgramController } from "./luApplicationProgram.controller";
import { LuApplicationProgramResolver } from "./luApplicationProgram.resolver";

@Module({
  imports: [LuApplicationProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationProgramController],
  providers: [LuApplicationProgramService, LuApplicationProgramResolver],
  exports: [LuApplicationProgramService],
})
export class LuApplicationProgramModule {}
