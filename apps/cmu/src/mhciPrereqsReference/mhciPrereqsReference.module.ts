import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsReferenceModuleBase } from "./base/mhciPrereqsReference.module.base";
import { MhciPrereqsReferenceService } from "./mhciPrereqsReference.service";
import { MhciPrereqsReferenceController } from "./mhciPrereqsReference.controller";
import { MhciPrereqsReferenceResolver } from "./mhciPrereqsReference.resolver";

@Module({
  imports: [MhciPrereqsReferenceModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsReferenceController],
  providers: [MhciPrereqsReferenceService, MhciPrereqsReferenceResolver],
  exports: [MhciPrereqsReferenceService],
})
export class MhciPrereqsReferenceModule {}
