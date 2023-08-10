import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdmissionLetterModuleBase } from "./base/admissionLetter.module.base";
import { AdmissionLetterService } from "./admissionLetter.service";
import { AdmissionLetterController } from "./admissionLetter.controller";
import { AdmissionLetterResolver } from "./admissionLetter.resolver";

@Module({
  imports: [AdmissionLetterModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdmissionLetterController],
  providers: [AdmissionLetterService, AdmissionLetterResolver],
  exports: [AdmissionLetterService],
})
export class AdmissionLetterModule {}
