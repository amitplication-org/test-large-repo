import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationAppreqModuleBase } from "./base/luApplicationAppreq.module.base";
import { LuApplicationAppreqService } from "./luApplicationAppreq.service";
import { LuApplicationAppreqController } from "./luApplicationAppreq.controller";
import { LuApplicationAppreqResolver } from "./luApplicationAppreq.resolver";

@Module({
  imports: [LuApplicationAppreqModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationAppreqController],
  providers: [LuApplicationAppreqService, LuApplicationAppreqResolver],
  exports: [LuApplicationAppreqService],
})
export class LuApplicationAppreqModule {}
