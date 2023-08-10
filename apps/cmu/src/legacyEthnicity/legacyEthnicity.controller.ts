import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LegacyEthnicityService } from "./legacyEthnicity.service";
import { LegacyEthnicityControllerBase } from "./base/legacyEthnicity.controller.base";

@swagger.ApiTags("legacyEthnicities")
@common.Controller("legacyEthnicities")
export class LegacyEthnicityController extends LegacyEthnicityControllerBase {
  constructor(
    protected readonly service: LegacyEthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
