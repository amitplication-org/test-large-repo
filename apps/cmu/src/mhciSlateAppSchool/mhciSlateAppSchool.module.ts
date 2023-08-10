import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlateAppSchoolModuleBase } from "./base/mhciSlateAppSchool.module.base";
import { MhciSlateAppSchoolService } from "./mhciSlateAppSchool.service";
import { MhciSlateAppSchoolController } from "./mhciSlateAppSchool.controller";
import { MhciSlateAppSchoolResolver } from "./mhciSlateAppSchool.resolver";

@Module({
  imports: [MhciSlateAppSchoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlateAppSchoolController],
  providers: [MhciSlateAppSchoolService, MhciSlateAppSchoolResolver],
  exports: [MhciSlateAppSchoolService],
})
export class MhciSlateAppSchoolModule {}
