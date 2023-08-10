import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UsersInfoResolverBase } from "./base/usersInfo.resolver.base";
import { UsersInfo } from "./base/UsersInfo";
import { UsersInfoService } from "./usersInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UsersInfo)
export class UsersInfoResolver extends UsersInfoResolverBase {
  constructor(
    protected readonly service: UsersInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
