import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssistantshipModuleBase } from "./base/assistantship.module.base";
import { AssistantshipService } from "./assistantship.service";
import { AssistantshipController } from "./assistantship.controller";
import { AssistantshipResolver } from "./assistantship.resolver";

@Module({
  imports: [AssistantshipModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssistantshipController],
  providers: [AssistantshipService, AssistantshipResolver],
  exports: [AssistantshipService],
})
export class AssistantshipModule {}
