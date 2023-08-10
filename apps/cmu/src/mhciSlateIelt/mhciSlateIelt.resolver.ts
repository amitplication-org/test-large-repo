import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlateIeltResolverBase } from "./base/mhciSlateIelt.resolver.base";
import { MhciSlateIelt } from "./base/MhciSlateIelt";
import { MhciSlateIeltService } from "./mhciSlateIelt.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlateIelt)
export class MhciSlateIeltResolver extends MhciSlateIeltResolverBase {
  constructor(
    protected readonly service: MhciSlateIeltService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
