import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationPeriodResolverBase } from "./base/applicationPeriod.resolver.base";
import { ApplicationPeriod } from "./base/ApplicationPeriod";
import { ApplicationPeriodService } from "./applicationPeriod.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationPeriod)
export class ApplicationPeriodResolver extends ApplicationPeriodResolverBase {
  constructor(
    protected readonly service: ApplicationPeriodService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
