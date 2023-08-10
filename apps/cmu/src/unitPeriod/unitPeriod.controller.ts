import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UnitPeriodService } from "./unitPeriod.service";
import { UnitPeriodControllerBase } from "./base/unitPeriod.controller.base";

@swagger.ApiTags("unitPeriods")
@common.Controller("unitPeriods")
export class UnitPeriodController extends UnitPeriodControllerBase {
  constructor(
    protected readonly service: UnitPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
