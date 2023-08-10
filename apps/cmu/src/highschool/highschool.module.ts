import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HighschoolModuleBase } from "./base/highschool.module.base";
import { HighschoolService } from "./highschool.service";
import { HighschoolController } from "./highschool.controller";
import { HighschoolResolver } from "./highschool.resolver";

@Module({
  imports: [HighschoolModuleBase, forwardRef(() => AuthModule)],
  controllers: [HighschoolController],
  providers: [HighschoolService, HighschoolResolver],
  exports: [HighschoolService],
})
export class HighschoolModule {}
