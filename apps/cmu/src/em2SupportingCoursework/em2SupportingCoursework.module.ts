import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Em2SupportingCourseworkModuleBase } from "./base/em2SupportingCoursework.module.base";
import { Em2SupportingCourseworkService } from "./em2SupportingCoursework.service";
import { Em2SupportingCourseworkController } from "./em2SupportingCoursework.controller";
import { Em2SupportingCourseworkResolver } from "./em2SupportingCoursework.resolver";

@Module({
  imports: [Em2SupportingCourseworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [Em2SupportingCourseworkController],
  providers: [Em2SupportingCourseworkService, Em2SupportingCourseworkResolver],
  exports: [Em2SupportingCourseworkService],
})
export class Em2SupportingCourseworkModule {}
