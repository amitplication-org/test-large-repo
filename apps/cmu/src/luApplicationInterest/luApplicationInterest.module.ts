import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationInterestModuleBase } from "./base/luApplicationInterest.module.base";
import { LuApplicationInterestService } from "./luApplicationInterest.service";
import { LuApplicationInterestController } from "./luApplicationInterest.controller";
import { LuApplicationInterestResolver } from "./luApplicationInterest.resolver";

@Module({
  imports: [LuApplicationInterestModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationInterestController],
  providers: [LuApplicationInterestService, LuApplicationInterestResolver],
  exports: [LuApplicationInterestService],
})
export class LuApplicationInterestModule {}
