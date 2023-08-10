import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcTransactionDetailResolverBase } from "./base/ccTransactionDetail.resolver.base";
import { CcTransactionDetail } from "./base/CcTransactionDetail";
import { CcTransactionDetailService } from "./ccTransactionDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcTransactionDetail)
export class CcTransactionDetailResolver extends CcTransactionDetailResolverBase {
  constructor(
    protected readonly service: CcTransactionDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
