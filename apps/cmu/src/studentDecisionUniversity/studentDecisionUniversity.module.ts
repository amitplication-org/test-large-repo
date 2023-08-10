import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StudentDecisionUniversityModuleBase } from "./base/studentDecisionUniversity.module.base";
import { StudentDecisionUniversityService } from "./studentDecisionUniversity.service";
import { StudentDecisionUniversityController } from "./studentDecisionUniversity.controller";
import { StudentDecisionUniversityResolver } from "./studentDecisionUniversity.resolver";

@Module({
  imports: [StudentDecisionUniversityModuleBase, forwardRef(() => AuthModule)],
  controllers: [StudentDecisionUniversityController],
  providers: [
    StudentDecisionUniversityService,
    StudentDecisionUniversityResolver,
  ],
  exports: [StudentDecisionUniversityService],
})
export class StudentDecisionUniversityModule {}
