import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicantIpedsRaceModuleBase } from "./base/applicantIpedsRace.module.base";
import { ApplicantIpedsRaceService } from "./applicantIpedsRace.service";
import { ApplicantIpedsRaceController } from "./applicantIpedsRace.controller";
import { ApplicantIpedsRaceResolver } from "./applicantIpedsRace.resolver";

@Module({
  imports: [ApplicantIpedsRaceModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicantIpedsRaceController],
  providers: [ApplicantIpedsRaceService, ApplicantIpedsRaceResolver],
  exports: [ApplicantIpedsRaceService],
})
export class ApplicantIpedsRaceModule {}
