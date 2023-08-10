import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GpascaleModuleBase } from "./base/gpascale.module.base";
import { GpascaleService } from "./gpascale.service";
import { GpascaleController } from "./gpascale.controller";
import { GpascaleResolver } from "./gpascale.resolver";

@Module({
  imports: [GpascaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [GpascaleController],
  providers: [GpascaleService, GpascaleResolver],
  exports: [GpascaleService],
})
export class GpascaleModule {}
