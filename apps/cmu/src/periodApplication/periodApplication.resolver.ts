import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeriodApplicationResolverBase } from "./base/periodApplication.resolver.base";
import { PeriodApplication } from "./base/PeriodApplication";
import { PeriodApplicationService } from "./periodApplication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeriodApplication)
export class PeriodApplicationResolver extends PeriodApplicationResolverBase {
  constructor(
    protected readonly service: PeriodApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
