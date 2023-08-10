import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsertypeModuleBase } from "./base/usertype.module.base";
import { UsertypeService } from "./usertype.service";
import { UsertypeController } from "./usertype.controller";
import { UsertypeResolver } from "./usertype.resolver";

@Module({
  imports: [UsertypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsertypeController],
  providers: [UsertypeService, UsertypeResolver],
  exports: [UsertypeService],
})
export class UsertypeModule {}
