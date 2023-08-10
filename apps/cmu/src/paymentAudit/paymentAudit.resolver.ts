import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PaymentAuditResolverBase } from "./base/paymentAudit.resolver.base";
import { PaymentAudit } from "./base/PaymentAudit";
import { PaymentAuditService } from "./paymentAudit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PaymentAudit)
export class PaymentAuditResolver extends PaymentAuditResolverBase {
  constructor(
    protected readonly service: PaymentAuditService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
