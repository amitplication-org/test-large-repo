import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DepartmentReplyperiodResolverBase } from "./base/departmentReplyperiod.resolver.base";
import { DepartmentReplyperiod } from "./base/DepartmentReplyperiod";
import { DepartmentReplyperiodService } from "./departmentReplyperiod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DepartmentReplyperiod)
export class DepartmentReplyperiodResolver extends DepartmentReplyperiodResolverBase {
  constructor(
    protected readonly service: DepartmentReplyperiodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
