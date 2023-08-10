import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MlAreaModuleBase } from "./base/mlArea.module.base";
import { MlAreaService } from "./mlArea.service";
import { MlAreaController } from "./mlArea.controller";
import { MlAreaResolver } from "./mlArea.resolver";

@Module({
  imports: [MlAreaModuleBase, forwardRef(() => AuthModule)],
  controllers: [MlAreaController],
  providers: [MlAreaService, MlAreaResolver],
  exports: [MlAreaService],
})
export class MlAreaModule {}
