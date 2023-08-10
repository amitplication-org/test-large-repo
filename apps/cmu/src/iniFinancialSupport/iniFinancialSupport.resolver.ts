import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IniFinancialSupportResolverBase } from "./base/iniFinancialSupport.resolver.base";
import { IniFinancialSupport } from "./base/IniFinancialSupport";
import { IniFinancialSupportService } from "./iniFinancialSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IniFinancialSupport)
export class IniFinancialSupportResolver extends IniFinancialSupportResolverBase {
  constructor(
    protected readonly service: IniFinancialSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
