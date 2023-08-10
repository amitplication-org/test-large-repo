import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateCodilityModuleBase } from "./base/mitsSlateCodility.module.base";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";
import { MitsSlateCodilityController } from "./mitsSlateCodility.controller";
import { MitsSlateCodilityResolver } from "./mitsSlateCodility.resolver";

@Module({
  imports: [MitsSlateCodilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateCodilityController],
  providers: [MitsSlateCodilityService, MitsSlateCodilityResolver],
  exports: [MitsSlateCodilityService],
})
export class MitsSlateCodilityModule {}
