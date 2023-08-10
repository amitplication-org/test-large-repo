import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CampusModuleBase } from "./base/campus.module.base";
import { CampusService } from "./campus.service";
import { CampusController } from "./campus.controller";
import { CampusResolver } from "./campus.resolver";

@Module({
  imports: [CampusModuleBase, forwardRef(() => AuthModule)],
  controllers: [CampusController],
  providers: [CampusService, CampusResolver],
  exports: [CampusService],
})
export class CampusModule {}
