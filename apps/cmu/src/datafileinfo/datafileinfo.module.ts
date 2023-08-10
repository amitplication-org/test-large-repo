import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatafileinfoModuleBase } from "./base/datafileinfo.module.base";
import { DatafileinfoService } from "./datafileinfo.service";
import { DatafileinfoController } from "./datafileinfo.controller";
import { DatafileinfoResolver } from "./datafileinfo.resolver";

@Module({
  imports: [DatafileinfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatafileinfoController],
  providers: [DatafileinfoService, DatafileinfoResolver],
  exports: [DatafileinfoService],
})
export class DatafileinfoModule {}
