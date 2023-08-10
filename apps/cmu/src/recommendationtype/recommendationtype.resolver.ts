import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecommendationtypeResolverBase } from "./base/recommendationtype.resolver.base";
import { Recommendationtype } from "./base/Recommendationtype";
import { RecommendationtypeService } from "./recommendationtype.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Recommendationtype)
export class RecommendationtypeResolver extends RecommendationtypeResolverBase {
  constructor(
    protected readonly service: RecommendationtypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
