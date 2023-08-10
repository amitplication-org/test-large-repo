import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccesslogService } from "./accesslog.service";
import { AccesslogControllerBase } from "./base/accesslog.controller.base";

@swagger.ApiTags("accesslogs")
@common.Controller("accesslogs")
export class AccesslogController extends AccesslogControllerBase {
  constructor(
    protected readonly service: AccesslogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
