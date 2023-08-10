import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GrescoreMscsWaiverModuleBase } from "./base/grescoreMscsWaiver.module.base";
import { GrescoreMscsWaiverService } from "./grescoreMscsWaiver.service";
import { GrescoreMscsWaiverController } from "./grescoreMscsWaiver.controller";
import { GrescoreMscsWaiverResolver } from "./grescoreMscsWaiver.resolver";

@Module({
  imports: [GrescoreMscsWaiverModuleBase, forwardRef(() => AuthModule)],
  controllers: [GrescoreMscsWaiverController],
  providers: [GrescoreMscsWaiverService, GrescoreMscsWaiverResolver],
  exports: [GrescoreMscsWaiverService],
})
export class GrescoreMscsWaiverModule {}
