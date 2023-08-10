import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateAppService } from "./slateApp.service";
import { SlateAppControllerBase } from "./base/slateApp.controller.base";

@swagger.ApiTags("slateApps")
@common.Controller("slateApps")
export class SlateAppController extends SlateAppControllerBase {
  constructor(
    protected readonly service: SlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
