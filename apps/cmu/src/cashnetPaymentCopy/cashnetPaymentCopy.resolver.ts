import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CashnetPaymentCopyResolverBase } from "./base/cashnetPaymentCopy.resolver.base";
import { CashnetPaymentCopy } from "./base/CashnetPaymentCopy";
import { CashnetPaymentCopyService } from "./cashnetPaymentCopy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CashnetPaymentCopy)
export class CashnetPaymentCopyResolver extends CashnetPaymentCopyResolverBase {
  constructor(
    protected readonly service: CashnetPaymentCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
