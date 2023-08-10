import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateCodilityService } from "./mitsSlateCodility.service";
import { MitsSlateCodilityControllerBase } from "./base/mitsSlateCodility.controller.base";

@swagger.ApiTags("mitsSlateCodilities")
@common.Controller("mitsSlateCodilities")
export class MitsSlateCodilityController extends MitsSlateCodilityControllerBase {
  constructor(
    protected readonly service: MitsSlateCodilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
