import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersOrigResolverBase } from "./base/usersOrig.resolver.base";
import { UsersOrig } from "./base/UsersOrig";
import { UsersOrigService } from "./usersOrig.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsersOrig)
export class UsersOrigResolver extends UsersOrigResolverBase {
  constructor(
    protected readonly service: UsersOrigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
