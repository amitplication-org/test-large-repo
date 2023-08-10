import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuUsersUsertypesOrigResolverBase } from "./base/luUsersUsertypesOrig.resolver.base";
import { LuUsersUsertypesOrig } from "./base/LuUsersUsertypesOrig";
import { LuUsersUsertypesOrigService } from "./luUsersUsertypesOrig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuUsersUsertypesOrig)
export class LuUsersUsertypesOrigResolver extends LuUsersUsertypesOrigResolverBase {
  constructor(
    protected readonly service: LuUsersUsertypesOrigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
