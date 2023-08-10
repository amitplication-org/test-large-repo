import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicantIpedsRaceService } from "./applicantIpedsRace.service";
import { ApplicantIpedsRaceControllerBase } from "./base/applicantIpedsRace.controller.base";

@swagger.ApiTags("applicantIpedsRaces")
@common.Controller("applicantIpedsRaces")
export class ApplicantIpedsRaceController extends ApplicantIpedsRaceControllerBase {
  constructor(
    protected readonly service: ApplicantIpedsRaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
