import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ToeflItpPlusModuleBase } from "./base/toeflItpPlus.module.base";
import { ToeflItpPlusService } from "./toeflItpPlus.service";
import { ToeflItpPlusController } from "./toeflItpPlus.controller";
import { ToeflItpPlusResolver } from "./toeflItpPlus.resolver";

@Module({
  imports: [ToeflItpPlusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ToeflItpPlusController],
  providers: [ToeflItpPlusService, ToeflItpPlusResolver],
  exports: [ToeflItpPlusService],
})
export class ToeflItpPlusModule {}
