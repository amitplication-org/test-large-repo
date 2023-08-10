import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SystemenvService } from "./systemenv.service";
import { SystemenvControllerBase } from "./base/systemenv.controller.base";

@swagger.ApiTags("systemenvs")
@common.Controller("systemenvs")
export class SystemenvController extends SystemenvControllerBase {
  constructor(
    protected readonly service: SystemenvService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
