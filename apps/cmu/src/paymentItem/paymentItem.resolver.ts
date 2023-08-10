import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentItemResolverBase } from "./base/paymentItem.resolver.base";
import { PaymentItem } from "./base/PaymentItem";
import { PaymentItemService } from "./paymentItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentItem)
export class PaymentItemResolver extends PaymentItemResolverBase {
  constructor(
    protected readonly service: PaymentItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
