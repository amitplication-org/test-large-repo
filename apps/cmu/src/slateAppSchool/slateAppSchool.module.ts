import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateAppSchoolModuleBase } from "./base/slateAppSchool.module.base";
import { SlateAppSchoolService } from "./slateAppSchool.service";
import { SlateAppSchoolController } from "./slateAppSchool.controller";
import { SlateAppSchoolResolver } from "./slateAppSchool.resolver";

@Module({
  imports: [SlateAppSchoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateAppSchoolController],
  providers: [SlateAppSchoolService, SlateAppSchoolResolver],
  exports: [SlateAppSchoolService],
})
export class SlateAppSchoolModule {}
