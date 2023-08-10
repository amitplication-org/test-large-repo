import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateAppSchoolModuleBase } from "./base/mitsSlateAppSchool.module.base";
import { MitsSlateAppSchoolService } from "./mitsSlateAppSchool.service";
import { MitsSlateAppSchoolController } from "./mitsSlateAppSchool.controller";
import { MitsSlateAppSchoolResolver } from "./mitsSlateAppSchool.resolver";

@Module({
  imports: [MitsSlateAppSchoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateAppSchoolController],
  providers: [MitsSlateAppSchoolService, MitsSlateAppSchoolResolver],
  exports: [MitsSlateAppSchoolService],
})
export class MitsSlateAppSchoolModule {}
