import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuDegreesApplicationreqModuleBase } from "./base/luDegreesApplicationreq.module.base";
import { LuDegreesApplicationreqService } from "./luDegreesApplicationreq.service";
import { LuDegreesApplicationreqController } from "./luDegreesApplicationreq.controller";
import { LuDegreesApplicationreqResolver } from "./luDegreesApplicationreq.resolver";

@Module({
  imports: [LuDegreesApplicationreqModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuDegreesApplicationreqController],
  providers: [LuDegreesApplicationreqService, LuDegreesApplicationreqResolver],
  exports: [LuDegreesApplicationreqService],
})
export class LuDegreesApplicationreqModule {}
