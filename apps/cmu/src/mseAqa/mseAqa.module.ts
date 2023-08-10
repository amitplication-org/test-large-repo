import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseAqaModuleBase } from "./base/mseAqa.module.base";
import { MseAqaService } from "./mseAqa.service";
import { MseAqaController } from "./mseAqa.controller";
import { MseAqaResolver } from "./mseAqa.resolver";

@Module({
  imports: [MseAqaModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseAqaController],
  providers: [MseAqaService, MseAqaResolver],
  exports: [MseAqaService],
})
export class MseAqaModule {}
