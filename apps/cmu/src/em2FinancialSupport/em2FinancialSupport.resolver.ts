import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Em2FinancialSupportResolverBase } from "./base/em2FinancialSupport.resolver.base";
import { Em2FinancialSupport } from "./base/Em2FinancialSupport";
import { Em2FinancialSupportService } from "./em2FinancialSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Em2FinancialSupport)
export class Em2FinancialSupportResolver extends Em2FinancialSupportResolverBase {
  constructor(
    protected readonly service: Em2FinancialSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
