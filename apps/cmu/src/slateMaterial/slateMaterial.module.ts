import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateMaterialModuleBase } from "./base/slateMaterial.module.base";
import { SlateMaterialService } from "./slateMaterial.service";
import { SlateMaterialController } from "./slateMaterial.controller";
import { SlateMaterialResolver } from "./slateMaterial.resolver";

@Module({
  imports: [SlateMaterialModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateMaterialController],
  providers: [SlateMaterialService, SlateMaterialResolver],
  exports: [SlateMaterialService],
})
export class SlateMaterialModule {}
