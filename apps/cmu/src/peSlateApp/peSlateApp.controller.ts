import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeSlateAppService } from "./peSlateApp.service";
import { PeSlateAppControllerBase } from "./base/peSlateApp.controller.base";

@swagger.ApiTags("peSlateApps")
@common.Controller("peSlateApps")
export class PeSlateAppController extends PeSlateAppControllerBase {
  constructor(
    protected readonly service: PeSlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
