import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciPrereqService } from "./mhciPrereq.service";
import { MhciPrereqControllerBase } from "./base/mhciPrereq.controller.base";

@swagger.ApiTags("mhciPrereqs")
@common.Controller("mhciPrereqs")
export class MhciPrereqController extends MhciPrereqControllerBase {
  constructor(
    protected readonly service: MhciPrereqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
