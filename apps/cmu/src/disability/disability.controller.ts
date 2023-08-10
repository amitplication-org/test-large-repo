import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DisabilityService } from "./disability.service";
import { DisabilityControllerBase } from "./base/disability.controller.base";

@swagger.ApiTags("disabilities")
@common.Controller("disabilities")
export class DisabilityController extends DisabilityControllerBase {
  constructor(
    protected readonly service: DisabilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
