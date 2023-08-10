import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationProgramsHistoryResolverBase } from "./base/luApplicationProgramsHistory.resolver.base";
import { LuApplicationProgramsHistory } from "./base/LuApplicationProgramsHistory";
import { LuApplicationProgramsHistoryService } from "./luApplicationProgramsHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationProgramsHistory)
export class LuApplicationProgramsHistoryResolver extends LuApplicationProgramsHistoryResolverBase {
  constructor(
    protected readonly service: LuApplicationProgramsHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
