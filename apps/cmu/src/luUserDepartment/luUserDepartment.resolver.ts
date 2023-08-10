import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuUserDepartmentResolverBase } from "./base/luUserDepartment.resolver.base";
import { LuUserDepartment } from "./base/LuUserDepartment";
import { LuUserDepartmentService } from "./luUserDepartment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuUserDepartment)
export class LuUserDepartmentResolver extends LuUserDepartmentResolverBase {
  constructor(
    protected readonly service: LuUserDepartmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
