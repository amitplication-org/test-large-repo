import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecisionRankMemberResolverBase } from "./base/decisionRankMember.resolver.base";
import { DecisionRankMember } from "./base/DecisionRankMember";
import { DecisionRankMemberService } from "./decisionRankMember.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecisionRankMember)
export class DecisionRankMemberResolver extends DecisionRankMemberResolverBase {
  constructor(
    protected readonly service: DecisionRankMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
