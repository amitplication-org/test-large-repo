import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GenderModuleBase } from "./base/gender.module.base";
import { GenderService } from "./gender.service";
import { GenderController } from "./gender.controller";
import { GenderResolver } from "./gender.resolver";

@Module({
  imports: [GenderModuleBase, forwardRef(() => AuthModule)],
  controllers: [GenderController],
  providers: [GenderService, GenderResolver],
  exports: [GenderService],
})
export class GenderModule {}
