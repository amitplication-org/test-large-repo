import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RegistrationFeeStatusService } from "./registrationFeeStatus.service";
import { RegistrationFeeStatusControllerBase } from "./base/registrationFeeStatus.controller.base";

@swagger.ApiTags("registrationFeeStatuses")
@common.Controller("registrationFeeStatuses")
export class RegistrationFeeStatusController extends RegistrationFeeStatusControllerBase {
  constructor(
    protected readonly service: RegistrationFeeStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
