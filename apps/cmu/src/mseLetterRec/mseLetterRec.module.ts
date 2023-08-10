import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MseLetterRecModuleBase } from "./base/mseLetterRec.module.base";
import { MseLetterRecService } from "./mseLetterRec.service";
import { MseLetterRecController } from "./mseLetterRec.controller";
import { MseLetterRecResolver } from "./mseLetterRec.resolver";

@Module({
  imports: [MseLetterRecModuleBase, forwardRef(() => AuthModule)],
  controllers: [MseLetterRecController],
  providers: [MseLetterRecService, MseLetterRecResolver],
  exports: [MseLetterRecService],
})
export class MseLetterRecModule {}
