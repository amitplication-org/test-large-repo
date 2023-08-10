import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ReviewIniAlternativeProgramModuleBase } from "./base/reviewIniAlternativeProgram.module.base";
import { ReviewIniAlternativeProgramService } from "./reviewIniAlternativeProgram.service";
import { ReviewIniAlternativeProgramController } from "./reviewIniAlternativeProgram.controller";
import { ReviewIniAlternativeProgramResolver } from "./reviewIniAlternativeProgram.resolver";

@Module({
  imports: [
    ReviewIniAlternativeProgramModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [ReviewIniAlternativeProgramController],
  providers: [
    ReviewIniAlternativeProgramService,
    ReviewIniAlternativeProgramResolver,
  ],
  exports: [ReviewIniAlternativeProgramService],
})
export class ReviewIniAlternativeProgramModule {}
