import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpecialConsiderationModuleBase } from "./base/specialConsideration.module.base";
import { SpecialConsiderationService } from "./specialConsideration.service";
import { SpecialConsiderationController } from "./specialConsideration.controller";
import { SpecialConsiderationResolver } from "./specialConsideration.resolver";

@Module({
  imports: [SpecialConsiderationModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpecialConsiderationController],
  providers: [SpecialConsiderationService, SpecialConsiderationResolver],
  exports: [SpecialConsiderationService],
})
export class SpecialConsiderationModule {}
