import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContenttypeModuleBase } from "./base/contenttype.module.base";
import { ContenttypeService } from "./contenttype.service";
import { ContenttypeController } from "./contenttype.controller";
import { ContenttypeResolver } from "./contenttype.resolver";

@Module({
  imports: [ContenttypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContenttypeController],
  providers: [ContenttypeService, ContenttypeResolver],
  exports: [ContenttypeService],
})
export class ContenttypeModule {}
