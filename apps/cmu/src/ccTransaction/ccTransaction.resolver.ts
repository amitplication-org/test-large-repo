import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CcTransactionResolverBase } from "./base/ccTransaction.resolver.base";
import { CcTransaction } from "./base/CcTransaction";
import { CcTransactionService } from "./ccTransaction.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CcTransaction)
export class CcTransactionResolver extends CcTransactionResolverBase {
  constructor(
    protected readonly service: CcTransactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
