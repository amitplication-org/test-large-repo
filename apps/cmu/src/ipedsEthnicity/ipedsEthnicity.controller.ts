import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IpedsEthnicityService } from "./ipedsEthnicity.service";
import { IpedsEthnicityControllerBase } from "./base/ipedsEthnicity.controller.base";

@swagger.ApiTags("ipedsEthnicities")
@common.Controller("ipedsEthnicities")
export class IpedsEthnicityController extends IpedsEthnicityControllerBase {
  constructor(
    protected readonly service: IpedsEthnicityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
