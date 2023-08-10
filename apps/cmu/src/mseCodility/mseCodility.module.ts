import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseCodilityModuleBase } from "./base/mseCodility.module.base";
import { MseCodilityService } from "./mseCodility.service";
import { MseCodilityController } from "./mseCodility.controller";
import { MseCodilityResolver } from "./mseCodility.resolver";

@Module({
  imports: [MseCodilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseCodilityController],
  providers: [MseCodilityService, MseCodilityResolver],
  exports: [MseCodilityService],
})
export class MseCodilityModule {}
