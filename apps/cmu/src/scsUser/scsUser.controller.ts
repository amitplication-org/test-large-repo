import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScsUserService } from "./scsUser.service";
import { ScsUserControllerBase } from "./base/scsUser.controller.base";

@swagger.ApiTags("scsUsers")
@common.Controller("scsUsers")
export class ScsUserController extends ScsUserControllerBase {
  constructor(
    protected readonly service: ScsUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
