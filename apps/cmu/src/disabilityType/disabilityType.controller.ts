import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DisabilityTypeService } from "./disabilityType.service";
import { DisabilityTypeControllerBase } from "./base/disabilityType.controller.base";

@swagger.ApiTags("disabilityTypes")
@common.Controller("disabilityTypes")
export class DisabilityTypeController extends DisabilityTypeControllerBase {
  constructor(
    protected readonly service: DisabilityTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
