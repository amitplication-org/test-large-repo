import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsCourseModuleBase } from "./base/mhciPrereqsCourse.module.base";
import { MhciPrereqsCourseService } from "./mhciPrereqsCourse.service";
import { MhciPrereqsCourseController } from "./mhciPrereqsCourse.controller";
import { MhciPrereqsCourseResolver } from "./mhciPrereqsCourse.resolver";

@Module({
  imports: [MhciPrereqsCourseModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsCourseController],
  providers: [MhciPrereqsCourseService, MhciPrereqsCourseResolver],
  exports: [MhciPrereqsCourseService],
})
export class MhciPrereqsCourseModule {}
