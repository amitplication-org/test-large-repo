import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GpascaleService } from "./gpascale.service";
import { GpascaleControllerBase } from "./base/gpascale.controller.base";

@swagger.ApiTags("gpascales")
@common.Controller("gpascales")
export class GpascaleController extends GpascaleControllerBase {
  constructor(
    protected readonly service: GpascaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
