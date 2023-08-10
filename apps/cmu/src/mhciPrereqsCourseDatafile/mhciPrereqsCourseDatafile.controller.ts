import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciPrereqsCourseDatafileService } from "./mhciPrereqsCourseDatafile.service";
import { MhciPrereqsCourseDatafileControllerBase } from "./base/mhciPrereqsCourseDatafile.controller.base";

@swagger.ApiTags("mhciPrereqsCourseDatafiles")
@common.Controller("mhciPrereqsCourseDatafiles")
export class MhciPrereqsCourseDatafileController extends MhciPrereqsCourseDatafileControllerBase {
  constructor(
    protected readonly service: MhciPrereqsCourseDatafileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
