import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationContentModuleBase } from "./base/applicationContent.module.base";
import { ApplicationContentService } from "./applicationContent.service";
import { ApplicationContentController } from "./applicationContent.controller";
import { ApplicationContentResolver } from "./applicationContent.resolver";

@Module({
  imports: [ApplicationContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationContentController],
  providers: [ApplicationContentService, ApplicationContentResolver],
  exports: [ApplicationContentService],
})
export class ApplicationContentModule {}
