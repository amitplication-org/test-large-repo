import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateEmail2awUserService } from "./slateEmail2awUser.service";
import { SlateEmail2awUserControllerBase } from "./base/slateEmail2awUser.controller.base";

@swagger.ApiTags("slateEmail2awUsers")
@common.Controller("slateEmail2awUsers")
export class SlateEmail2awUserController extends SlateEmail2awUserControllerBase {
  constructor(
    protected readonly service: SlateEmail2awUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
