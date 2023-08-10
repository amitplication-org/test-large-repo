import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatafileTypeModuleBase } from "./base/datafileType.module.base";
import { DatafileTypeService } from "./datafileType.service";
import { DatafileTypeController } from "./datafileType.controller";
import { DatafileTypeResolver } from "./datafileType.resolver";

@Module({
  imports: [DatafileTypeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatafileTypeController],
  providers: [DatafileTypeService, DatafileTypeResolver],
  exports: [DatafileTypeService],
})
export class DatafileTypeModule {}
