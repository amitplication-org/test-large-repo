import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateCodilityModuleBase } from "./base/slateCodility.module.base";
import { SlateCodilityService } from "./slateCodility.service";
import { SlateCodilityController } from "./slateCodility.controller";
import { SlateCodilityResolver } from "./slateCodility.resolver";

@Module({
  imports: [SlateCodilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateCodilityController],
  providers: [SlateCodilityService, SlateCodilityResolver],
  exports: [SlateCodilityService],
})
export class SlateCodilityModule {}
