import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LuApplicationStartSemesterModuleBase } from "./base/luApplicationStartSemester.module.base";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";
import { LuApplicationStartSemesterController } from "./luApplicationStartSemester.controller";
import { LuApplicationStartSemesterResolver } from "./luApplicationStartSemester.resolver";

@Module({
  imports: [LuApplicationStartSemesterModuleBase, forwardRef(() => AuthModule)],
  controllers: [LuApplicationStartSemesterController],
  providers: [
    LuApplicationStartSemesterService,
    LuApplicationStartSemesterResolver,
  ],
  exports: [LuApplicationStartSemesterService],
})
export class LuApplicationStartSemesterModule {}
