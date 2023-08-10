import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DietrichRecognitionModuleBase } from "./base/dietrichRecognition.module.base";
import { DietrichRecognitionService } from "./dietrichRecognition.service";
import { DietrichRecognitionController } from "./dietrichRecognition.controller";
import { DietrichRecognitionResolver } from "./dietrichRecognition.resolver";

@Module({
  imports: [DietrichRecognitionModuleBase, forwardRef(() => AuthModule)],
  controllers: [DietrichRecognitionController],
  providers: [DietrichRecognitionService, DietrichRecognitionResolver],
  exports: [DietrichRecognitionService],
})
export class DietrichRecognitionModule {}
