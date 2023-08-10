import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdmissionModuleBase } from "./base/admission.module.base";
import { AdmissionService } from "./admission.service";
import { AdmissionController } from "./admission.controller";
import { AdmissionResolver } from "./admission.resolver";

@Module({
  imports: [AdmissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdmissionController],
  providers: [AdmissionService, AdmissionResolver],
  exports: [AdmissionService],
})
export class AdmissionModule {}
