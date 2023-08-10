import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DegreesallModuleBase } from "./base/degreesall.module.base";
import { DegreesallService } from "./degreesall.service";
import { DegreesallController } from "./degreesall.controller";
import { DegreesallResolver } from "./degreesall.resolver";

@Module({
  imports: [DegreesallModuleBase, forwardRef(() => AuthModule)],
  controllers: [DegreesallController],
  providers: [DegreesallService, DegreesallResolver],
  exports: [DegreesallService],
})
export class DegreesallModule {}
