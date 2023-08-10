import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationreqModuleBase } from "./base/applicationreq.module.base";
import { ApplicationreqService } from "./applicationreq.service";
import { ApplicationreqController } from "./applicationreq.controller";
import { ApplicationreqResolver } from "./applicationreq.resolver";

@Module({
  imports: [ApplicationreqModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationreqController],
  providers: [ApplicationreqService, ApplicationreqResolver],
  exports: [ApplicationreqService],
})
export class ApplicationreqModule {}
