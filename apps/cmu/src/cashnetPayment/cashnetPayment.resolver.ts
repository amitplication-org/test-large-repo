import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CashnetPaymentResolverBase } from "./base/cashnetPayment.resolver.base";
import { CashnetPayment } from "./base/CashnetPayment";
import { CashnetPaymentService } from "./cashnetPayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashnetPayment)
export class CashnetPaymentResolver extends CashnetPaymentResolverBase {
  constructor(
    protected readonly service: CashnetPaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
