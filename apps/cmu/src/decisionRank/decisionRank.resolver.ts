import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecisionRankResolverBase } from "./base/decisionRank.resolver.base";
import { DecisionRank } from "./base/DecisionRank";
import { DecisionRankService } from "./decisionRank.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecisionRank)
export class DecisionRankResolver extends DecisionRankResolverBase {
  constructor(
    protected readonly service: DecisionRankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
