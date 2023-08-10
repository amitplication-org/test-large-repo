import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IpedsRaceService } from "./ipedsRace.service";
import { IpedsRaceControllerBase } from "./base/ipedsRace.controller.base";

@swagger.ApiTags("ipedsRaces")
@common.Controller("ipedsRaces")
export class IpedsRaceController extends IpedsRaceControllerBase {
  constructor(
    protected readonly service: IpedsRaceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
