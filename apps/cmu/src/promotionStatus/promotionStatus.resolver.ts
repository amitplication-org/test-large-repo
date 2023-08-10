import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PromotionStatusResolverBase } from "./base/promotionStatus.resolver.base";
import { PromotionStatus } from "./base/PromotionStatus";
import { PromotionStatusService } from "./promotionStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PromotionStatus)
export class PromotionStatusResolver extends PromotionStatusResolverBase {
  constructor(
    protected readonly service: PromotionStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
