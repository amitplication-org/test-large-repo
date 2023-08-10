import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AttendanceStatusService } from "./attendanceStatus.service";
import { AttendanceStatusControllerBase } from "./base/attendanceStatus.controller.base";

@swagger.ApiTags("attendanceStatuses")
@common.Controller("attendanceStatuses")
export class AttendanceStatusController extends AttendanceStatusControllerBase {
  constructor(
    protected readonly service: AttendanceStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
