import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersinstResolverBase } from "./base/usersinst.resolver.base";
import { Usersinst } from "./base/Usersinst";
import { UsersinstService } from "./usersinst.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Usersinst)
export class UsersinstResolver extends UsersinstResolverBase {
  constructor(
    protected readonly service: UsersinstService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
