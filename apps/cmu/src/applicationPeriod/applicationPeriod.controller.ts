import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationPeriodService } from "./applicationPeriod.service";
import { ApplicationPeriodControllerBase } from "./base/applicationPeriod.controller.base";

@swagger.ApiTags("applicationPeriods")
@common.Controller("applicationPeriods")
export class ApplicationPeriodController extends ApplicationPeriodControllerBase {
  constructor(
    protected readonly service: ApplicationPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
