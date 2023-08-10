import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcTransactionReportResolverBase } from "./base/ccTransactionReport.resolver.base";
import { CcTransactionReport } from "./base/CcTransactionReport";
import { CcTransactionReportService } from "./ccTransactionReport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcTransactionReport)
export class CcTransactionReportResolver extends CcTransactionReportResolverBase {
  constructor(
    protected readonly service: CcTransactionReportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
