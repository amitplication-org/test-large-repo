import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuUsersUsertypeResolverBase } from "./base/luUsersUsertype.resolver.base";
import { LuUsersUsertype } from "./base/LuUsersUsertype";
import { LuUsersUsertypeService } from "./luUsersUsertype.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuUsersUsertype)
export class LuUsersUsertypeResolver extends LuUsersUsertypeResolverBase {
  constructor(
    protected readonly service: LuUsersUsertypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
