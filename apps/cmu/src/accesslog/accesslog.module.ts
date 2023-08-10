import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccesslogModuleBase } from "./base/accesslog.module.base";
import { AccesslogService } from "./accesslog.service";
import { AccesslogController } from "./accesslog.controller";
import { AccesslogResolver } from "./accesslog.resolver";

@Module({
  imports: [AccesslogModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccesslogController],
  providers: [AccesslogService, AccesslogResolver],
  exports: [AccesslogService],
})
export class AccesslogModule {}
