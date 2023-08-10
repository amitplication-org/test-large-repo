import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateAppResolverBase } from "./base/mitsSlateApp.resolver.base";
import { MitsSlateApp } from "./base/MitsSlateApp";
import { MitsSlateAppService } from "./mitsSlateApp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateApp)
export class MitsSlateAppResolver extends MitsSlateAppResolverBase {
  constructor(
    protected readonly service: MitsSlateAppService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
