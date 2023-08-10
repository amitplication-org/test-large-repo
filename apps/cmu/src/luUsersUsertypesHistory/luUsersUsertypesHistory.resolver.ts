import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuUsersUsertypesHistoryResolverBase } from "./base/luUsersUsertypesHistory.resolver.base";
import { LuUsersUsertypesHistory } from "./base/LuUsersUsertypesHistory";
import { LuUsersUsertypesHistoryService } from "./luUsersUsertypesHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuUsersUsertypesHistory)
export class LuUsersUsertypesHistoryResolver extends LuUsersUsertypesHistoryResolverBase {
  constructor(
    protected readonly service: LuUsersUsertypesHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
