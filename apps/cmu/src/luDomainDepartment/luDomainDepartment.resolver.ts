import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuDomainDepartmentResolverBase } from "./base/luDomainDepartment.resolver.base";
import { LuDomainDepartment } from "./base/LuDomainDepartment";
import { LuDomainDepartmentService } from "./luDomainDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuDomainDepartment)
export class LuDomainDepartmentResolver extends LuDomainDepartmentResolverBase {
  constructor(
    protected readonly service: LuDomainDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
