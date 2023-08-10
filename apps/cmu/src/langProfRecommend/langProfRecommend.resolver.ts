import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LangProfRecommendResolverBase } from "./base/langProfRecommend.resolver.base";
import { LangProfRecommend } from "./base/LangProfRecommend";
import { LangProfRecommendService } from "./langProfRecommend.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LangProfRecommend)
export class LangProfRecommendResolver extends LangProfRecommendResolverBase {
  constructor(
    protected readonly service: LangProfRecommendService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
