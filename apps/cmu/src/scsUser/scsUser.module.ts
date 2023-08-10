import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScsUserModuleBase } from "./base/scsUser.module.base";
import { ScsUserService } from "./scsUser.service";
import { ScsUserController } from "./scsUser.controller";
import { ScsUserResolver } from "./scsUser.resolver";

@Module({
  imports: [ScsUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScsUserController],
  providers: [ScsUserService, ScsUserResolver],
  exports: [ScsUserService],
})
export class ScsUserModule {}
