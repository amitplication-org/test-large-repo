import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CcAuthNotificationModuleBase } from "./base/ccAuthNotification.module.base";
import { CcAuthNotificationService } from "./ccAuthNotification.service";
import { CcAuthNotificationController } from "./ccAuthNotification.controller";
import { CcAuthNotificationResolver } from "./ccAuthNotification.resolver";

@Module({
  imports: [CcAuthNotificationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CcAuthNotificationController],
  providers: [CcAuthNotificationService, CcAuthNotificationResolver],
  exports: [CcAuthNotificationService],
})
export class CcAuthNotificationModule {}
