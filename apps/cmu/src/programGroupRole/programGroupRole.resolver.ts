import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramGroupRoleResolverBase } from "./base/programGroupRole.resolver.base";
import { ProgramGroupRole } from "./base/ProgramGroupRole";
import { ProgramGroupRoleService } from "./programGroupRole.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroupRole)
export class ProgramGroupRoleResolver extends ProgramGroupRoleResolverBase {
  constructor(
    protected readonly service: ProgramGroupRoleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
