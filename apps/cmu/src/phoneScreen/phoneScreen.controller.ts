import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PhoneScreenService } from "./phoneScreen.service";
import { PhoneScreenControllerBase } from "./base/phoneScreen.controller.base";

@swagger.ApiTags("phoneScreens")
@common.Controller("phoneScreens")
export class PhoneScreenController extends PhoneScreenControllerBase {
  constructor(
    protected readonly service: PhoneScreenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
