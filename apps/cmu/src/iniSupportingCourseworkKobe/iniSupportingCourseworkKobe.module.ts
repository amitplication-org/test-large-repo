import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniSupportingCourseworkKobeModuleBase } from "./base/iniSupportingCourseworkKobe.module.base";
import { IniSupportingCourseworkKobeService } from "./iniSupportingCourseworkKobe.service";
import { IniSupportingCourseworkKobeController } from "./iniSupportingCourseworkKobe.controller";
import { IniSupportingCourseworkKobeResolver } from "./iniSupportingCourseworkKobe.resolver";

@Module({
  imports: [
    IniSupportingCourseworkKobeModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [IniSupportingCourseworkKobeController],
  providers: [
    IniSupportingCourseworkKobeService,
    IniSupportingCourseworkKobeResolver,
  ],
  exports: [IniSupportingCourseworkKobeService],
})
export class IniSupportingCourseworkKobeModule {}
