import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RejectionWaiverModuleBase } from "./base/rejectionWaiver.module.base";
import { RejectionWaiverService } from "./rejectionWaiver.service";
import { RejectionWaiverController } from "./rejectionWaiver.controller";
import { RejectionWaiverResolver } from "./rejectionWaiver.resolver";

@Module({
  imports: [RejectionWaiverModuleBase, forwardRef(() => AuthModule)],
  controllers: [RejectionWaiverController],
  providers: [RejectionWaiverService, RejectionWaiverResolver],
  exports: [RejectionWaiverService],
})
export class RejectionWaiverModule {}
