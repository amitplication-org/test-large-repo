import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationDecisionSchoolModuleBase } from "./base/applicationDecisionSchool.module.base";
import { ApplicationDecisionSchoolService } from "./applicationDecisionSchool.service";
import { ApplicationDecisionSchoolController } from "./applicationDecisionSchool.controller";
import { ApplicationDecisionSchoolResolver } from "./applicationDecisionSchool.resolver";

@Module({
  imports: [ApplicationDecisionSchoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationDecisionSchoolController],
  providers: [
    ApplicationDecisionSchoolService,
    ApplicationDecisionSchoolResolver,
  ],
  exports: [ApplicationDecisionSchoolService],
})
export class ApplicationDecisionSchoolModule {}
