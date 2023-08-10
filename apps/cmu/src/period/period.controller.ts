import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodService } from "./period.service";
import { PeriodControllerBase } from "./base/period.controller.base";

@swagger.ApiTags("periods")
@common.Controller("periods")
export class PeriodController extends PeriodControllerBase {
  constructor(
    protected readonly service: PeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
