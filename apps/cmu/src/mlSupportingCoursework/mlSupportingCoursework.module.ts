import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MlSupportingCourseworkModuleBase } from "./base/mlSupportingCoursework.module.base";
import { MlSupportingCourseworkService } from "./mlSupportingCoursework.service";
import { MlSupportingCourseworkController } from "./mlSupportingCoursework.controller";
import { MlSupportingCourseworkResolver } from "./mlSupportingCoursework.resolver";

@Module({
  imports: [MlSupportingCourseworkModuleBase, forwardRef(() => AuthModule)],
  controllers: [MlSupportingCourseworkController],
  providers: [MlSupportingCourseworkService, MlSupportingCourseworkResolver],
  exports: [MlSupportingCourseworkService],
})
export class MlSupportingCourseworkModule {}
