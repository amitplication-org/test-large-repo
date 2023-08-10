import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcPaymentStatusResolverBase } from "./base/ccPaymentStatus.resolver.base";
import { CcPaymentStatus } from "./base/CcPaymentStatus";
import { CcPaymentStatusService } from "./ccPaymentStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcPaymentStatus)
export class CcPaymentStatusResolver extends CcPaymentStatusResolverBase {
  constructor(
    protected readonly service: CcPaymentStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
