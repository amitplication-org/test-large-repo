import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationAdvisorModuleBase } from "./base/luApplicationAdvisor.module.base";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";
import { LuApplicationAdvisorController } from "./luApplicationAdvisor.controller";
import { LuApplicationAdvisorResolver } from "./luApplicationAdvisor.resolver";

@Module({
  imports: [LuApplicationAdvisorModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationAdvisorController],
  providers: [LuApplicationAdvisorService, LuApplicationAdvisorResolver],
  exports: [LuApplicationAdvisorService],
})
export class LuApplicationAdvisorModule {}
