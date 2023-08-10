import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccesslogreplyformService } from "./accesslogreplyform.service";
import { AccesslogreplyformControllerBase } from "./base/accesslogreplyform.controller.base";

@swagger.ApiTags("accesslogreplyforms")
@common.Controller("accesslogreplyforms")
export class AccesslogreplyformController extends AccesslogreplyformControllerBase {
  constructor(
    protected readonly service: AccesslogreplyformService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
