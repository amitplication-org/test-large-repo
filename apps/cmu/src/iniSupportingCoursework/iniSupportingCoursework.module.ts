import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniSupportingCourseworkModuleBase } from "./base/iniSupportingCoursework.module.base";
import { IniSupportingCourseworkService } from "./iniSupportingCoursework.service";
import { IniSupportingCourseworkController } from "./iniSupportingCoursework.controller";
import { IniSupportingCourseworkResolver } from "./iniSupportingCoursework.resolver";

@Module({
  imports: [IniSupportingCourseworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [IniSupportingCourseworkController],
  providers: [IniSupportingCourseworkService, IniSupportingCourseworkResolver],
  exports: [IniSupportingCourseworkService],
})
export class IniSupportingCourseworkModule {}
