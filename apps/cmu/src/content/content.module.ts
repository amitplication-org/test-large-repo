import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContentModuleBase } from "./base/content.module.base";
import { ContentService } from "./content.service";
import { ContentController } from "./content.controller";
import { ContentResolver } from "./content.resolver";

@Module({
  imports: [ContentModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContentController],
  providers: [ContentService, ContentResolver],
  exports: [ContentService],
})
export class ContentModule {}
