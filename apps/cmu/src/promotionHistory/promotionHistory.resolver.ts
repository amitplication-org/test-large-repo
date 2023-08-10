import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PromotionHistoryResolverBase } from "./base/promotionHistory.resolver.base";
import { PromotionHistory } from "./base/PromotionHistory";
import { PromotionHistoryService } from "./promotionHistory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PromotionHistory)
export class PromotionHistoryResolver extends PromotionHistoryResolverBase {
  constructor(
    protected readonly service: PromotionHistoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
