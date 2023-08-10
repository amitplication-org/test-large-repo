import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentNewResolverBase } from "./base/paymentNew.resolver.base";
import { PaymentNew } from "./base/PaymentNew";
import { PaymentNewService } from "./paymentNew.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentNew)
export class PaymentNewResolver extends PaymentNewResolverBase {
  constructor(
    protected readonly service: PaymentNewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
