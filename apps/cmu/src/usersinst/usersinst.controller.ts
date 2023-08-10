import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersinstService } from "./usersinst.service";
import { UsersinstControllerBase } from "./base/usersinst.controller.base";

@swagger.ApiTags("usersinsts")
@common.Controller("usersinsts")
export class UsersinstController extends UsersinstControllerBase {
  constructor(
    protected readonly service: UsersinstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
