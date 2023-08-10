import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VisatypeModuleBase } from "./base/visatype.module.base";
import { VisatypeService } from "./visatype.service";
import { VisatypeController } from "./visatype.controller";
import { VisatypeResolver } from "./visatype.resolver";

@Module({
  imports: [VisatypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [VisatypeController],
  providers: [VisatypeService, VisatypeResolver],
  exports: [VisatypeService],
})
export class VisatypeModule {}
