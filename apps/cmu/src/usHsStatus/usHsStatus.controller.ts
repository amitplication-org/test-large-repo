import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsHSStatusService } from "./usHsStatus.service";
import { UsHSStatusControllerBase } from "./base/usHsStatus.controller.base";

@swagger.ApiTags("usHsStatuses")
@common.Controller("usHsStatuses")
export class UsHSStatusController extends UsHSStatusControllerBase {
  constructor(
    protected readonly service: UsHSStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
