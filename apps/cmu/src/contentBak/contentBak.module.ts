import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContentBakModuleBase } from "./base/contentBak.module.base";
import { ContentBakService } from "./contentBak.service";
import { ContentBakController } from "./contentBak.controller";
import { ContentBakResolver } from "./contentBak.resolver";

@Module({
  imports: [ContentBakModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContentBakController],
  providers: [ContentBakService, ContentBakResolver],
  exports: [ContentBakService],
})
export class ContentBakModule {}
