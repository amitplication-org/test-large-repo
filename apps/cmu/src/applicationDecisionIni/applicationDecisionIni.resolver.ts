import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationDecisionIniResolverBase } from "./base/applicationDecisionIni.resolver.base";
import { ApplicationDecisionIni } from "./base/ApplicationDecisionIni";
import { ApplicationDecisionIniService } from "./applicationDecisionIni.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationDecisionIni)
export class ApplicationDecisionIniResolver extends ApplicationDecisionIniResolverBase {
  constructor(
    protected readonly service: ApplicationDecisionIniService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
