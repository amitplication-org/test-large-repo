import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IpedsRaceModuleBase } from "./base/ipedsRace.module.base";
import { IpedsRaceService } from "./ipedsRace.service";
import { IpedsRaceController } from "./ipedsRace.controller";
import { IpedsRaceResolver } from "./ipedsRace.resolver";

@Module({
  imports: [IpedsRaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [IpedsRaceController],
  providers: [IpedsRaceService, IpedsRaceResolver],
  exports: [IpedsRaceService],
})
export class IpedsRaceModule {}
