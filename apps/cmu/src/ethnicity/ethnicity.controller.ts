import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EthnicityService } from "./ethnicity.service";
import { EthnicityControllerBase } from "./base/ethnicity.controller.base";

@swagger.ApiTags("ethnicities")
@common.Controller("ethnicities")
export class EthnicityController extends EthnicityControllerBase {
  constructor(
    protected readonly service: EthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
