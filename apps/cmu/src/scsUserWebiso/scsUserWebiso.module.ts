import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScsUserWebisoModuleBase } from "./base/scsUserWebiso.module.base";
import { ScsUserWebisoService } from "./scsUserWebiso.service";
import { ScsUserWebisoController } from "./scsUserWebiso.controller";
import { ScsUserWebisoResolver } from "./scsUserWebiso.resolver";

@Module({
  imports: [ScsUserWebisoModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScsUserWebisoController],
  providers: [ScsUserWebisoService, ScsUserWebisoResolver],
  exports: [ScsUserWebisoService],
})
export class ScsUserWebisoModule {}
