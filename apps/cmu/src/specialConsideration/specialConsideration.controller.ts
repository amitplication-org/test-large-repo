import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpecialConsiderationService } from "./specialConsideration.service";
import { SpecialConsiderationControllerBase } from "./base/specialConsideration.controller.base";

@swagger.ApiTags("specialConsiderations")
@common.Controller("specialConsiderations")
export class SpecialConsiderationController extends SpecialConsiderationControllerBase {
  constructor(
    protected readonly service: SpecialConsiderationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
