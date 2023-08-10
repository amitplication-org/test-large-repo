import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationCohortModuleBase } from "./base/luApplicationCohort.module.base";
import { LuApplicationCohortService } from "./luApplicationCohort.service";
import { LuApplicationCohortController } from "./luApplicationCohort.controller";
import { LuApplicationCohortResolver } from "./luApplicationCohort.resolver";

@Module({
  imports: [LuApplicationCohortModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationCohortController],
  providers: [LuApplicationCohortService, LuApplicationCohortResolver],
  exports: [LuApplicationCohortService],
})
export class LuApplicationCohortModule {}
