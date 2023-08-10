import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";
import { MhciPrereqsProgrammingTestControllerBase } from "./base/mhciPrereqsProgrammingTest.controller.base";

@swagger.ApiTags("mhciPrereqsProgrammingTests")
@common.Controller("mhciPrereqsProgrammingTests")
export class MhciPrereqsProgrammingTestController extends MhciPrereqsProgrammingTestControllerBase {
  constructor(
    protected readonly service: MhciPrereqsProgrammingTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
