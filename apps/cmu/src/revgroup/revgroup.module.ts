import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RevgroupModuleBase } from "./base/revgroup.module.base";
import { RevgroupService } from "./revgroup.service";
import { RevgroupController } from "./revgroup.controller";
import { RevgroupResolver } from "./revgroup.resolver";

@Module({
  imports: [RevgroupModuleBase, forwardRef(() => AuthModule)],
  controllers: [RevgroupController],
  providers: [RevgroupService, RevgroupResolver],
  exports: [RevgroupService],
})
export class RevgroupModule {}
