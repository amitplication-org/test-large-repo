import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationMergeFileModuleBase } from "./base/applicationMergeFile.module.base";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";
import { ApplicationMergeFileController } from "./applicationMergeFile.controller";
import { ApplicationMergeFileResolver } from "./applicationMergeFile.resolver";

@Module({
  imports: [ApplicationMergeFileModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationMergeFileController],
  providers: [ApplicationMergeFileService, ApplicationMergeFileResolver],
  exports: [ApplicationMergeFileService],
})
export class ApplicationMergeFileModule {}
