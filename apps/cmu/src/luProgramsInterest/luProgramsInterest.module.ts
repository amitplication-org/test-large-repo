import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuProgramsInterestModuleBase } from "./base/luProgramsInterest.module.base";
import { LuProgramsInterestService } from "./luProgramsInterest.service";
import { LuProgramsInterestController } from "./luProgramsInterest.controller";
import { LuProgramsInterestResolver } from "./luProgramsInterest.resolver";

@Module({
  imports: [LuProgramsInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuProgramsInterestController],
  providers: [LuProgramsInterestService, LuProgramsInterestResolver],
  exports: [LuProgramsInterestService],
})
export class LuProgramsInterestModule {}
