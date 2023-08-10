import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateGreModuleBase } from "./base/mitsSlateGre.module.base";
import { MitsSlateGreService } from "./mitsSlateGre.service";
import { MitsSlateGreController } from "./mitsSlateGre.controller";
import { MitsSlateGreResolver } from "./mitsSlateGre.resolver";

@Module({
  imports: [MitsSlateGreModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateGreController],
  providers: [MitsSlateGreService, MitsSlateGreResolver],
  exports: [MitsSlateGreService],
})
export class MitsSlateGreModule {}
