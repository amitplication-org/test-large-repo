import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationProgramsHistoryModuleBase } from "./base/luApplicationProgramsHistory.module.base";
import { LuApplicationProgramsHistoryService } from "./luApplicationProgramsHistory.service";
import { LuApplicationProgramsHistoryController } from "./luApplicationProgramsHistory.controller";
import { LuApplicationProgramsHistoryResolver } from "./luApplicationProgramsHistory.resolver";

@Module({
  imports: [
    LuApplicationProgramsHistoryModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [LuApplicationProgramsHistoryController],
  providers: [
    LuApplicationProgramsHistoryService,
    LuApplicationProgramsHistoryResolver,
  ],
  exports: [LuApplicationProgramsHistoryService],
})
export class LuApplicationProgramsHistoryModule {}
