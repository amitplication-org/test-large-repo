import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RegistrationFeePaymentResolverBase } from "./base/registrationFeePayment.resolver.base";
import { RegistrationFeePayment } from "./base/RegistrationFeePayment";
import { RegistrationFeePaymentService } from "./registrationFeePayment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RegistrationFeePayment)
export class RegistrationFeePaymentResolver extends RegistrationFeePaymentResolverBase {
  constructor(
    protected readonly service: RegistrationFeePaymentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
