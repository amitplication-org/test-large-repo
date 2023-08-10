import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MitsSlateEmployModuleBase } from "./base/mitsSlateEmploy.module.base";
import { MitsSlateEmployService } from "./mitsSlateEmploy.service";
import { MitsSlateEmployController } from "./mitsSlateEmploy.controller";
import { MitsSlateEmployResolver } from "./mitsSlateEmploy.resolver";

@Module({
  imports: [MitsSlateEmployModuleBase, forwardRef(() => AuthModule)],
  controllers: [MitsSlateEmployController],
  providers: [MitsSlateEmployService, MitsSlateEmployResolver],
  exports: [MitsSlateEmployService],
})
export class MitsSlateEmployModule {}
