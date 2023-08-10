import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersRemoteAuthStringResolverBase } from "./base/usersRemoteAuthString.resolver.base";
import { UsersRemoteAuthString } from "./base/UsersRemoteAuthString";
import { UsersRemoteAuthStringService } from "./usersRemoteAuthString.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsersRemoteAuthString)
export class UsersRemoteAuthStringResolver extends UsersRemoteAuthStringResolverBase {
  constructor(
    protected readonly service: UsersRemoteAuthStringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
