import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SystemenvModuleBase } from "./base/systemenv.module.base";
import { SystemenvService } from "./systemenv.service";
import { SystemenvController } from "./systemenv.controller";
import { SystemenvResolver } from "./systemenv.resolver";

@Module({
  imports: [SystemenvModuleBase, forwardRef(() => AuthModule)],
  controllers: [SystemenvController],
  providers: [SystemenvService, SystemenvResolver],
  exports: [SystemenvService],
})
export class SystemenvModule {}
