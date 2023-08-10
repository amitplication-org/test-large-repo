import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlatePubService } from "./slatePub.service";
import { SlatePubControllerBase } from "./base/slatePub.controller.base";

@swagger.ApiTags("slatePubs")
@common.Controller("slatePubs")
export class SlatePubController extends SlatePubControllerBase {
  constructor(
    protected readonly service: SlatePubService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
