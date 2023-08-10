import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationCohortResolverBase } from "./base/luApplicationCohort.resolver.base";
import { LuApplicationCohort } from "./base/LuApplicationCohort";
import { LuApplicationCohortService } from "./luApplicationCohort.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationCohort)
export class LuApplicationCohortResolver extends LuApplicationCohortResolverBase {
  constructor(
    protected readonly service: LuApplicationCohortService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
