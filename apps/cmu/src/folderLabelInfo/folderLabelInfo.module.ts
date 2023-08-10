import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FolderLabelInfoModuleBase } from "./base/folderLabelInfo.module.base";
import { FolderLabelInfoService } from "./folderLabelInfo.service";
import { FolderLabelInfoController } from "./folderLabelInfo.controller";
import { FolderLabelInfoResolver } from "./folderLabelInfo.resolver";

@Module({
  imports: [FolderLabelInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [FolderLabelInfoController],
  providers: [FolderLabelInfoService, FolderLabelInfoResolver],
  exports: [FolderLabelInfoService],
})
export class FolderLabelInfoModule {}
