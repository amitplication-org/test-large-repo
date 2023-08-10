import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IniDisciplinaryActionModuleBase } from "./base/iniDisciplinaryAction.module.base";
import { IniDisciplinaryActionService } from "./iniDisciplinaryAction.service";
import { IniDisciplinaryActionController } from "./iniDisciplinaryAction.controller";
import { IniDisciplinaryActionResolver } from "./iniDisciplinaryAction.resolver";

@Module({
  imports: [IniDisciplinaryActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [IniDisciplinaryActionController],
  providers: [IniDisciplinaryActionService, IniDisciplinaryActionResolver],
  exports: [IniDisciplinaryActionService],
})
export class IniDisciplinaryActionModule {}
