import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdvisorModuleBase } from "./base/advisor.module.base";
import { AdvisorService } from "./advisor.service";
import { AdvisorController } from "./advisor.controller";
import { AdvisorResolver } from "./advisor.resolver";

@Module({
  imports: [AdvisorModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdvisorController],
  providers: [AdvisorService, AdvisorResolver],
  exports: [AdvisorService],
})
export class AdvisorModule {}
