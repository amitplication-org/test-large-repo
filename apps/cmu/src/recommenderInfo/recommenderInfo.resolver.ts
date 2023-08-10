import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RecommenderInfoResolverBase } from "./base/recommenderInfo.resolver.base";
import { RecommenderInfo } from "./base/RecommenderInfo";
import { RecommenderInfoService } from "./recommenderInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RecommenderInfo)
export class RecommenderInfoResolver extends RecommenderInfoResolverBase {
  constructor(
    protected readonly service: RecommenderInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
