import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateMaterialService } from "./slateMaterial.service";
import { SlateMaterialControllerBase } from "./base/slateMaterial.controller.base";

@swagger.ApiTags("slateMaterials")
@common.Controller("slateMaterials")
export class SlateMaterialController extends SlateMaterialControllerBase {
  constructor(
    protected readonly service: SlateMaterialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
