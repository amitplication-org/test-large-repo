import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DietrichFinancialSupportResolverBase } from "./base/dietrichFinancialSupport.resolver.base";
import { DietrichFinancialSupport } from "./base/DietrichFinancialSupport";
import { DietrichFinancialSupportService } from "./dietrichFinancialSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DietrichFinancialSupport)
export class DietrichFinancialSupportResolver extends DietrichFinancialSupportResolverBase {
  constructor(
    protected readonly service: DietrichFinancialSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
