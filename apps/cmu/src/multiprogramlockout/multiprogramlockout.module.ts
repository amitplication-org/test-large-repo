import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MultiprogramlockoutModuleBase } from "./base/multiprogramlockout.module.base";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";
import { MultiprogramlockoutController } from "./multiprogramlockout.controller";
import { MultiprogramlockoutResolver } from "./multiprogramlockout.resolver";

@Module({
  imports: [MultiprogramlockoutModuleBase, forwardRef(() => AuthModule)],
  controllers: [MultiprogramlockoutController],
  providers: [MultiprogramlockoutService, MultiprogramlockoutResolver],
  exports: [MultiprogramlockoutService],
})
export class MultiprogramlockoutModule {}
