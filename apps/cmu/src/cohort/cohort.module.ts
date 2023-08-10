import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CohortModuleBase } from "./base/cohort.module.base";
import { CohortService } from "./cohort.service";
import { CohortController } from "./cohort.controller";
import { CohortResolver } from "./cohort.resolver";

@Module({
  imports: [CohortModuleBase, forwardRef(() => AuthModule)],
  controllers: [CohortController],
  providers: [CohortService, CohortResolver],
  exports: [CohortService],
})
export class CohortModule {}
