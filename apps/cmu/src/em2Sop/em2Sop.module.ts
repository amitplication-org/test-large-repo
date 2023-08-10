import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Em2SopModuleBase } from "./base/em2Sop.module.base";
import { Em2SopService } from "./em2Sop.service";
import { Em2SopController } from "./em2Sop.controller";
import { Em2SopResolver } from "./em2Sop.resolver";

@Module({
  imports: [Em2SopModuleBase, forwardRef(() => AuthModule)],
  controllers: [Em2SopController],
  providers: [Em2SopService, Em2SopResolver],
  exports: [Em2SopService],
})
export class Em2SopModule {}
