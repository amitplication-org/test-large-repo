import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MhciSlateToeflModuleBase } from "./base/mhciSlateToefl.module.base";
import { MhciSlateToeflService } from "./mhciSlateToefl.service";
import { MhciSlateToeflController } from "./mhciSlateToefl.controller";
import { MhciSlateToeflResolver } from "./mhciSlateToefl.resolver";

@Module({
  imports: [MhciSlateToeflModuleBase, forwardRef(() => AuthModule)],
  controllers: [MhciSlateToeflController],
  providers: [MhciSlateToeflService, MhciSlateToeflResolver],
  exports: [MhciSlateToeflService],
})
export class MhciSlateToeflModule {}
