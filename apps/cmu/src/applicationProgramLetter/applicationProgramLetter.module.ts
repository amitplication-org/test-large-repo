import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationProgramLetterModuleBase } from "./base/applicationProgramLetter.module.base";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";
import { ApplicationProgramLetterController } from "./applicationProgramLetter.controller";
import { ApplicationProgramLetterResolver } from "./applicationProgramLetter.resolver";

@Module({
  imports: [ApplicationProgramLetterModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationProgramLetterController],
  providers: [
    ApplicationProgramLetterService,
    ApplicationProgramLetterResolver,
  ],
  exports: [ApplicationProgramLetterService],
})
export class ApplicationProgramLetterModule {}
