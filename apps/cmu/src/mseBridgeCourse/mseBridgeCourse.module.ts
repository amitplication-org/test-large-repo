import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseBridgeCourseModuleBase } from "./base/mseBridgeCourse.module.base";
import { MseBridgeCourseService } from "./mseBridgeCourse.service";
import { MseBridgeCourseController } from "./mseBridgeCourse.controller";
import { MseBridgeCourseResolver } from "./mseBridgeCourse.resolver";

@Module({
  imports: [MseBridgeCourseModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseBridgeCourseController],
  providers: [MseBridgeCourseService, MseBridgeCourseResolver],
  exports: [MseBridgeCourseService],
})
export class MseBridgeCourseModule {}
