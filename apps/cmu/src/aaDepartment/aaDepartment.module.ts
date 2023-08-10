import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AaDepartmentModuleBase } from "./base/aaDepartment.module.base";
import { AaDepartmentService } from "./aaDepartment.service";
import { AaDepartmentController } from "./aaDepartment.controller";
import { AaDepartmentResolver } from "./aaDepartment.resolver";

@Module({
  imports: [AaDepartmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [AaDepartmentController],
  providers: [AaDepartmentService, AaDepartmentResolver],
  exports: [AaDepartmentService],
})
export class AaDepartmentModule {}
