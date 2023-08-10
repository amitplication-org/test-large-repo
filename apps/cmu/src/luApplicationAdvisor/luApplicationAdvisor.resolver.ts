import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationAdvisorResolverBase } from "./base/luApplicationAdvisor.resolver.base";
import { LuApplicationAdvisor } from "./base/LuApplicationAdvisor";
import { LuApplicationAdvisorService } from "./luApplicationAdvisor.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationAdvisor)
export class LuApplicationAdvisorResolver extends LuApplicationAdvisorResolverBase {
  constructor(
    protected readonly service: LuApplicationAdvisorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
