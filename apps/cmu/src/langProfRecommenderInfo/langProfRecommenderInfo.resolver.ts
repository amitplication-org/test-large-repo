import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LangProfRecommenderInfoResolverBase } from "./base/langProfRecommenderInfo.resolver.base";
import { LangProfRecommenderInfo } from "./base/LangProfRecommenderInfo";
import { LangProfRecommenderInfoService } from "./langProfRecommenderInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LangProfRecommenderInfo)
export class LangProfRecommenderInfoResolver extends LangProfRecommenderInfoResolverBase {
  constructor(
    protected readonly service: LangProfRecommenderInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
