import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GenderService } from "./gender.service";
import { GenderControllerBase } from "./base/gender.controller.base";

@swagger.ApiTags("genders")
@common.Controller("genders")
export class GenderController extends GenderControllerBase {
  constructor(
    protected readonly service: GenderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
