import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RissFundingModuleBase } from "./base/rissFunding.module.base";
import { RissFundingService } from "./rissFunding.service";
import { RissFundingController } from "./rissFunding.controller";
import { RissFundingResolver } from "./rissFunding.resolver";

@Module({
  imports: [RissFundingModuleBase, forwardRef(() => AuthModule)],
  controllers: [RissFundingController],
  providers: [RissFundingService, RissFundingResolver],
  exports: [RissFundingService],
})
export class RissFundingModule {}
