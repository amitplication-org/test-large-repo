import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DepartmentUnitResolverBase } from "./base/departmentUnit.resolver.base";
import { DepartmentUnit } from "./base/DepartmentUnit";
import { DepartmentUnitService } from "./departmentUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DepartmentUnit)
export class DepartmentUnitResolver extends DepartmentUnitResolverBase {
  constructor(
    protected readonly service: DepartmentUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
