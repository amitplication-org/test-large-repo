import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VeteranInfoModuleBase } from "./base/veteranInfo.module.base";
import { VeteranInfoService } from "./veteranInfo.service";
import { VeteranInfoController } from "./veteranInfo.controller";
import { VeteranInfoResolver } from "./veteranInfo.resolver";

@Module({
  imports: [VeteranInfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [VeteranInfoController],
  providers: [VeteranInfoService, VeteranInfoResolver],
  exports: [VeteranInfoService],
})
export class VeteranInfoModule {}
