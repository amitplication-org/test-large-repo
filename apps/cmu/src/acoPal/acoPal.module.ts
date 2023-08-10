import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AcoPalModuleBase } from "./base/acoPal.module.base";
import { AcoPalService } from "./acoPal.service";
import { AcoPalController } from "./acoPal.controller";
import { AcoPalResolver } from "./acoPal.resolver";

@Module({
  imports: [AcoPalModuleBase, forwardRef(() => AuthModule)],
  controllers: [AcoPalController],
  providers: [AcoPalService, AcoPalResolver],
  exports: [AcoPalService],
})
export class AcoPalModule {}
