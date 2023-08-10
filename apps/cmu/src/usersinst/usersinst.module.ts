import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsersinstModuleBase } from "./base/usersinst.module.base";
import { UsersinstService } from "./usersinst.service";
import { UsersinstController } from "./usersinst.controller";
import { UsersinstResolver } from "./usersinst.resolver";

@Module({
  imports: [UsersinstModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsersinstController],
  providers: [UsersinstService, UsersinstResolver],
  exports: [UsersinstService],
})
export class UsersinstModule {}
