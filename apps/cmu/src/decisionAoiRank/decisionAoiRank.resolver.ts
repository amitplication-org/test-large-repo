import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecisionAoiRankResolverBase } from "./base/decisionAoiRank.resolver.base";
import { DecisionAoiRank } from "./base/DecisionAoiRank";
import { DecisionAoiRankService } from "./decisionAoiRank.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecisionAoiRank)
export class DecisionAoiRankResolver extends DecisionAoiRankResolverBase {
  constructor(
    protected readonly service: DecisionAoiRankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
