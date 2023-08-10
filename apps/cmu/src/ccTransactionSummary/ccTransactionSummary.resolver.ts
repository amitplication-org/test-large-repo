import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcTransactionSummaryResolverBase } from "./base/ccTransactionSummary.resolver.base";
import { CcTransactionSummary } from "./base/CcTransactionSummary";
import { CcTransactionSummaryService } from "./ccTransactionSummary.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcTransactionSummary)
export class CcTransactionSummaryResolver extends CcTransactionSummaryResolverBase {
  constructor(
    protected readonly service: CcTransactionSummaryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
