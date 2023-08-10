import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DuolingoDataCopyModuleBase } from "./base/duolingoDataCopy.module.base";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";
import { DuolingoDataCopyController } from "./duolingoDataCopy.controller";
import { DuolingoDataCopyResolver } from "./duolingoDataCopy.resolver";

@Module({
  imports: [DuolingoDataCopyModuleBase, forwardRef(() => AuthModule)],
  controllers: [DuolingoDataCopyController],
  providers: [DuolingoDataCopyService, DuolingoDataCopyResolver],
  exports: [DuolingoDataCopyService],
})
export class DuolingoDataCopyModule {}
