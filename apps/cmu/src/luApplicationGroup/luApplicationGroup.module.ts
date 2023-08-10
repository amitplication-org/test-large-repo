import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationGroupModuleBase } from "./base/luApplicationGroup.module.base";
import { LuApplicationGroupService } from "./luApplicationGroup.service";
import { LuApplicationGroupController } from "./luApplicationGroup.controller";
import { LuApplicationGroupResolver } from "./luApplicationGroup.resolver";

@Module({
  imports: [LuApplicationGroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationGroupController],
  providers: [LuApplicationGroupService, LuApplicationGroupResolver],
  exports: [LuApplicationGroupService],
})
export class LuApplicationGroupModule {}
