import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DegreeModuleBase } from "./base/degree.module.base";
import { DegreeService } from "./degree.service";
import { DegreeController } from "./degree.controller";
import { DegreeResolver } from "./degree.resolver";

@Module({
  imports: [DegreeModuleBase, forwardRef(() => AuthModule)],
  controllers: [DegreeController],
  providers: [DegreeService, DegreeResolver],
  exports: [DegreeService],
})
export class DegreeModule {}
