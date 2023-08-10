import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateIeltService } from "./slateIelt.service";
import { SlateIeltControllerBase } from "./base/slateIelt.controller.base";

@swagger.ApiTags("slateIelts")
@common.Controller("slateIelts")
export class SlateIeltController extends SlateIeltControllerBase {
  constructor(
    protected readonly service: SlateIeltService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
