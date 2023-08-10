import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SlateOrgsAllModuleBase } from "./base/slateOrgsAll.module.base";
import { SlateOrgsAllService } from "./slateOrgsAll.service";
import { SlateOrgsAllController } from "./slateOrgsAll.controller";
import { SlateOrgsAllResolver } from "./slateOrgsAll.resolver";

@Module({
  imports: [SlateOrgsAllModuleBase, forwardRef(() => AuthModule)],
  controllers: [SlateOrgsAllController],
  providers: [SlateOrgsAllService, SlateOrgsAllResolver],
  exports: [SlateOrgsAllService],
})
export class SlateOrgsAllModule {}
