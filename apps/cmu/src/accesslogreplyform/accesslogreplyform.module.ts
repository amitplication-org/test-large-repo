import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccesslogreplyformModuleBase } from "./base/accesslogreplyform.module.base";
import { AccesslogreplyformService } from "./accesslogreplyform.service";
import { AccesslogreplyformController } from "./accesslogreplyform.controller";
import { AccesslogreplyformResolver } from "./accesslogreplyform.resolver";

@Module({
  imports: [AccesslogreplyformModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccesslogreplyformController],
  providers: [AccesslogreplyformService, AccesslogreplyformResolver],
  exports: [AccesslogreplyformService],
})
export class AccesslogreplyformModule {}
