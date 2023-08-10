import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DisabilityModuleBase } from "./base/disability.module.base";
import { DisabilityService } from "./disability.service";
import { DisabilityController } from "./disability.controller";
import { DisabilityResolver } from "./disability.resolver";

@Module({
  imports: [DisabilityModuleBase, forwardRef(() => AuthModule)],
  controllers: [DisabilityController],
  providers: [DisabilityService, DisabilityResolver],
  exports: [DisabilityService],
})
export class DisabilityModule {}
