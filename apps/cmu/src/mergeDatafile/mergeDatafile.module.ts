import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MergeDatafileModuleBase } from "./base/mergeDatafile.module.base";
import { MergeDatafileService } from "./mergeDatafile.service";
import { MergeDatafileController } from "./mergeDatafile.controller";
import { MergeDatafileResolver } from "./mergeDatafile.resolver";

@Module({
  imports: [MergeDatafileModuleBase, forwardRef(() => AuthModule)],
  controllers: [MergeDatafileController],
  providers: [MergeDatafileService, MergeDatafileResolver],
  exports: [MergeDatafileService],
})
export class MergeDatafileModule {}
