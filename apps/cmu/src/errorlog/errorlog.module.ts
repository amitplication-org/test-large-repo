import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ErrorlogModuleBase } from "./base/errorlog.module.base";
import { ErrorlogService } from "./errorlog.service";
import { ErrorlogController } from "./errorlog.controller";
import { ErrorlogResolver } from "./errorlog.resolver";

@Module({
  imports: [ErrorlogModuleBase, forwardRef(() => AuthModule)],
  controllers: [ErrorlogController],
  providers: [ErrorlogService, ErrorlogResolver],
  exports: [ErrorlogService],
})
export class ErrorlogModule {}
