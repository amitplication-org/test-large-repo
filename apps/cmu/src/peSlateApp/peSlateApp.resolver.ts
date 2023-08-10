import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PeSlateAppResolverBase } from "./base/peSlateApp.resolver.base";
import { PeSlateApp } from "./base/PeSlateApp";
import { PeSlateAppService } from "./peSlateApp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeSlateApp)
export class PeSlateAppResolver extends PeSlateAppResolverBase {
  constructor(
    protected readonly service: PeSlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
