import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateProgramModuleBase } from "./base/slateProgram.module.base";
import { SlateProgramService } from "./slateProgram.service";
import { SlateProgramController } from "./slateProgram.controller";
import { SlateProgramResolver } from "./slateProgram.resolver";

@Module({
  imports: [SlateProgramModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateProgramController],
  providers: [SlateProgramService, SlateProgramResolver],
  exports: [SlateProgramService],
})
export class SlateProgramModule {}
