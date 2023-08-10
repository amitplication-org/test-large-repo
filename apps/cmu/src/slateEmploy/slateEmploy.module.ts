import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateEmployModuleBase } from "./base/slateEmploy.module.base";
import { SlateEmployService } from "./slateEmploy.service";
import { SlateEmployController } from "./slateEmploy.controller";
import { SlateEmployResolver } from "./slateEmploy.resolver";

@Module({
  imports: [SlateEmployModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateEmployController],
  providers: [SlateEmployService, SlateEmployResolver],
  exports: [SlateEmployService],
})
export class SlateEmployModule {}
