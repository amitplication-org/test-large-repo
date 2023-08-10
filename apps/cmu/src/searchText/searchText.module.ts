import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SearchTextModuleBase } from "./base/searchText.module.base";
import { SearchTextService } from "./searchText.service";
import { SearchTextController } from "./searchText.controller";
import { SearchTextResolver } from "./searchText.resolver";

@Module({
  imports: [SearchTextModuleBase, forwardRef(() => AuthModule)],
  controllers: [SearchTextController],
  providers: [SearchTextService, SearchTextResolver],
  exports: [SearchTextService],
})
export class SearchTextModule {}
