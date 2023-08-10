import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MseRiskFactorsDecisionResolverBase } from "./base/mseRiskFactorsDecision.resolver.base";
import { MseRiskFactorsDecision } from "./base/MseRiskFactorsDecision";
import { MseRiskFactorsDecisionService } from "./mseRiskFactorsDecision.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MseRiskFactorsDecision)
export class MseRiskFactorsDecisionResolver extends MseRiskFactorsDecisionResolverBase {
  constructor(
    protected readonly service: MseRiskFactorsDecisionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
