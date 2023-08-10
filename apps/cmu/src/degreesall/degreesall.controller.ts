import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DegreesallService } from "./degreesall.service";
import { DegreesallControllerBase } from "./base/degreesall.controller.base";

@swagger.ApiTags("degreesalls")
@common.Controller("degreesalls")
export class DegreesallController extends DegreesallControllerBase {
  constructor(
    protected readonly service: DegreesallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
