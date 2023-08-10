import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AcoPalService } from "./acoPal.service";
import { AcoPalControllerBase } from "./base/acoPal.controller.base";

@swagger.ApiTags("acoPals")
@common.Controller("acoPals")
export class AcoPalController extends AcoPalControllerBase {
  constructor(
    protected readonly service: AcoPalService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
