import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PromotionHistoryCopyResolverBase } from "./base/promotionHistoryCopy.resolver.base";
import { PromotionHistoryCopy } from "./base/PromotionHistoryCopy";
import { PromotionHistoryCopyService } from "./promotionHistoryCopy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PromotionHistoryCopy)
export class PromotionHistoryCopyResolver extends PromotionHistoryCopyResolverBase {
  constructor(
    protected readonly service: PromotionHistoryCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
