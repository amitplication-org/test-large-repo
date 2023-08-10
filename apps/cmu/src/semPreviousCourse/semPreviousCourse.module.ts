import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SemPreviousCourseModuleBase } from "./base/semPreviousCourse.module.base";
import { SemPreviousCourseService } from "./semPreviousCourse.service";
import { SemPreviousCourseController } from "./semPreviousCourse.controller";
import { SemPreviousCourseResolver } from "./semPreviousCourse.resolver";

@Module({
  imports: [SemPreviousCourseModuleBase, forwardRef(() => AuthModule)],
  controllers: [SemPreviousCourseController],
  providers: [SemPreviousCourseService, SemPreviousCourseResolver],
  exports: [SemPreviousCourseService],
})
export class SemPreviousCourseModule {}
