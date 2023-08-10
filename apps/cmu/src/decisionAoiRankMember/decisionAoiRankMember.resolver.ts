import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecisionAoiRankMemberResolverBase } from "./base/decisionAoiRankMember.resolver.base";
import { DecisionAoiRankMember } from "./base/DecisionAoiRankMember";
import { DecisionAoiRankMemberService } from "./decisionAoiRankMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecisionAoiRankMember)
export class DecisionAoiRankMemberResolver extends DecisionAoiRankMemberResolverBase {
  constructor(
    protected readonly service: DecisionAoiRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
