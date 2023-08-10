import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseSupportingCourseworkModuleBase } from "./base/mseSupportingCoursework.module.base";
import { MseSupportingCourseworkService } from "./mseSupportingCoursework.service";
import { MseSupportingCourseworkController } from "./mseSupportingCoursework.controller";
import { MseSupportingCourseworkResolver } from "./mseSupportingCoursework.resolver";

@Module({
  imports: [MseSupportingCourseworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseSupportingCourseworkController],
  providers: [MseSupportingCourseworkService, MseSupportingCourseworkResolver],
  exports: [MseSupportingCourseworkService],
})
export class MseSupportingCourseworkModule {}
