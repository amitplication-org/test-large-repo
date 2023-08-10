import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstituteModuleBase } from "./base/institute.module.base";
import { InstituteService } from "./institute.service";
import { InstituteController } from "./institute.controller";
import { InstituteResolver } from "./institute.resolver";

@Module({
  imports: [InstituteModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstituteController],
  providers: [InstituteService, InstituteResolver],
  exports: [InstituteService],
})
export class InstituteModule {}
