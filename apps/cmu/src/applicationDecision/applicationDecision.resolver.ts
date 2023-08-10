import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationDecisionResolverBase } from "./base/applicationDecision.resolver.base";
import { ApplicationDecision } from "./base/ApplicationDecision";
import { ApplicationDecisionService } from "./applicationDecision.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationDecision)
export class ApplicationDecisionResolver extends ApplicationDecisionResolverBase {
  constructor(
    protected readonly service: ApplicationDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
