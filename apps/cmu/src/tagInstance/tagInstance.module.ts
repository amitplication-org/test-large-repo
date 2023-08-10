import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TagInstanceModuleBase } from "./base/tagInstance.module.base";
import { TagInstanceService } from "./tagInstance.service";
import { TagInstanceController } from "./tagInstance.controller";
import { TagInstanceResolver } from "./tagInstance.resolver";

@Module({
  imports: [TagInstanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [TagInstanceController],
  providers: [TagInstanceService, TagInstanceResolver],
  exports: [TagInstanceService],
})
export class TagInstanceModule {}
