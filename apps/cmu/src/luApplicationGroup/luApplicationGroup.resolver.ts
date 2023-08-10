import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationGroupResolverBase } from "./base/luApplicationGroup.resolver.base";
import { LuApplicationGroup } from "./base/LuApplicationGroup";
import { LuApplicationGroupService } from "./luApplicationGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationGroup)
export class LuApplicationGroupResolver extends LuApplicationGroupResolverBase {
  constructor(
    protected readonly service: LuApplicationGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
