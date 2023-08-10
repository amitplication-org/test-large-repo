import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateIeltResolverBase } from "./base/mitsSlateIelt.resolver.base";
import { MitsSlateIelt } from "./base/MitsSlateIelt";
import { MitsSlateIeltService } from "./mitsSlateIelt.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateIelt)
export class MitsSlateIeltResolver extends MitsSlateIeltResolverBase {
  constructor(
    protected readonly service: MitsSlateIeltService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
