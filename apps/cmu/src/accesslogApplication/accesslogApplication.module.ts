import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccesslogApplicationModuleBase } from "./base/accesslogApplication.module.base";
import { AccesslogApplicationService } from "./accesslogApplication.service";
import { AccesslogApplicationController } from "./accesslogApplication.controller";
import { AccesslogApplicationResolver } from "./accesslogApplication.resolver";

@Module({
  imports: [AccesslogApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccesslogApplicationController],
  providers: [AccesslogApplicationService, AccesslogApplicationResolver],
  exports: [AccesslogApplicationService],
})
export class AccesslogApplicationModule {}
