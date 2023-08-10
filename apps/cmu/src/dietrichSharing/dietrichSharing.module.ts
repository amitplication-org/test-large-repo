import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DietrichSharingModuleBase } from "./base/dietrichSharing.module.base";
import { DietrichSharingService } from "./dietrichSharing.service";
import { DietrichSharingController } from "./dietrichSharing.controller";
import { DietrichSharingResolver } from "./dietrichSharing.resolver";

@Module({
  imports: [DietrichSharingModuleBase, forwardRef(() => AuthModule)],
  controllers: [DietrichSharingController],
  providers: [DietrichSharingService, DietrichSharingResolver],
  exports: [DietrichSharingService],
})
export class DietrichSharingModule {}
