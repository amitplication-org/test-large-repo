import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DisabilityTypeModuleBase } from "./base/disabilityType.module.base";
import { DisabilityTypeService } from "./disabilityType.service";
import { DisabilityTypeController } from "./disabilityType.controller";
import { DisabilityTypeResolver } from "./disabilityType.resolver";

@Module({
  imports: [DisabilityTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DisabilityTypeController],
  providers: [DisabilityTypeService, DisabilityTypeResolver],
  exports: [DisabilityTypeService],
})
export class DisabilityTypeModule {}
