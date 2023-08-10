import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SystemenvResolverBase } from "./base/systemenv.resolver.base";
import { Systemenv } from "./base/Systemenv";
import { SystemenvService } from "./systemenv.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Systemenv)
export class SystemenvResolver extends SystemenvResolverBase {
  constructor(
    protected readonly service: SystemenvService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
