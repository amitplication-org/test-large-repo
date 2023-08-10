import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AttendanceStatusResolverBase } from "./base/attendanceStatus.resolver.base";
import { AttendanceStatus } from "./base/AttendanceStatus";
import { AttendanceStatusService } from "./attendanceStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AttendanceStatus)
export class AttendanceStatusResolver extends AttendanceStatusResolverBase {
  constructor(
    protected readonly service: AttendanceStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
