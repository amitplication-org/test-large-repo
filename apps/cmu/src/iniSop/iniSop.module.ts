import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniSopModuleBase } from "./base/iniSop.module.base";
import { IniSopService } from "./iniSop.service";
import { IniSopController } from "./iniSop.controller";
import { IniSopResolver } from "./iniSop.resolver";

@Module({
  imports: [IniSopModuleBase, forwardRef(() => AuthModule)],
  controllers: [IniSopController],
  providers: [IniSopService, IniSopResolver],
  exports: [IniSopService],
})
export class IniSopModule {}
