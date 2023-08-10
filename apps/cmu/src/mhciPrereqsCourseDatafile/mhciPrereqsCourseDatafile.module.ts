import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciPrereqsCourseDatafileModuleBase } from "./base/mhciPrereqsCourseDatafile.module.base";
import { MhciPrereqsCourseDatafileService } from "./mhciPrereqsCourseDatafile.service";
import { MhciPrereqsCourseDatafileController } from "./mhciPrereqsCourseDatafile.controller";
import { MhciPrereqsCourseDatafileResolver } from "./mhciPrereqsCourseDatafile.resolver";

@Module({
  imports: [MhciPrereqsCourseDatafileModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciPrereqsCourseDatafileController],
  providers: [
    MhciPrereqsCourseDatafileService,
    MhciPrereqsCourseDatafileResolver,
  ],
  exports: [MhciPrereqsCourseDatafileService],
})
export class MhciPrereqsCourseDatafileModule {}
