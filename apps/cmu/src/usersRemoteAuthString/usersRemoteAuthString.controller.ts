import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";
import { UsersRemoteAuthStringControllerBase } from "./base/usersRemoteAuthString.controller.base";

@swagger.ApiTags("usersRemoteAuthStrings")
@common.Controller("usersRemoteAuthStrings")
export class UsersRemoteAuthStringController extends UsersRemoteAuthStringControllerBase {
  constructor(
    protected readonly service: UsersRemoteAuthStringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
