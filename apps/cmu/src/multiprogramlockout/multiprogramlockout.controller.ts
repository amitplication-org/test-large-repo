import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MultiprogramlockoutService } from "./multiprogramlockout.service";
import { MultiprogramlockoutControllerBase } from "./base/multiprogramlockout.controller.base";

@swagger.ApiTags("multiprogramlockouts")
@common.Controller("multiprogramlockouts")
export class MultiprogramlockoutController extends MultiprogramlockoutControllerBase {
  constructor(
    protected readonly service: MultiprogramlockoutService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
