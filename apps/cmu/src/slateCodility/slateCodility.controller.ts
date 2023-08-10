import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateCodilityService } from "./slateCodility.service";
import { SlateCodilityControllerBase } from "./base/slateCodility.controller.base";

@swagger.ApiTags("slateCodilities")
@common.Controller("slateCodilities")
export class SlateCodilityController extends SlateCodilityControllerBase {
  constructor(
    protected readonly service: SlateCodilityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
