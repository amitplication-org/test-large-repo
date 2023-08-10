import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseBridgeCourseDecisionResolverBase } from "./base/mseBridgeCourseDecision.resolver.base";
import { MseBridgeCourseDecision } from "./base/MseBridgeCourseDecision";
import { MseBridgeCourseDecisionService } from "./mseBridgeCourseDecision.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseBridgeCourseDecision)
export class MseBridgeCourseDecisionResolver extends MseBridgeCourseDecisionResolverBase {
  constructor(
    protected readonly service: MseBridgeCourseDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
