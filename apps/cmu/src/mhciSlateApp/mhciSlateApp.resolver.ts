import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlateAppResolverBase } from "./base/mhciSlateApp.resolver.base";
import { MhciSlateApp } from "./base/MhciSlateApp";
import { MhciSlateAppService } from "./mhciSlateApp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlateApp)
export class MhciSlateAppResolver extends MhciSlateAppResolverBase {
  constructor(
    protected readonly service: MhciSlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
