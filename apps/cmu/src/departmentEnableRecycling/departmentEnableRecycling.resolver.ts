import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DepartmentEnableRecyclingResolverBase } from "./base/departmentEnableRecycling.resolver.base";
import { DepartmentEnableRecycling } from "./base/DepartmentEnableRecycling";
import { DepartmentEnableRecyclingService } from "./departmentEnableRecycling.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DepartmentEnableRecycling)
export class DepartmentEnableRecyclingResolver extends DepartmentEnableRecyclingResolverBase {
  constructor(
    protected readonly service: DepartmentEnableRecyclingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
