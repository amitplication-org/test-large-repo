import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentVoucherResolverBase } from "./base/paymentVoucher.resolver.base";
import { PaymentVoucher } from "./base/PaymentVoucher";
import { PaymentVoucherService } from "./paymentVoucher.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentVoucher)
export class PaymentVoucherResolver extends PaymentVoucherResolverBase {
  constructor(
    protected readonly service: PaymentVoucherService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
