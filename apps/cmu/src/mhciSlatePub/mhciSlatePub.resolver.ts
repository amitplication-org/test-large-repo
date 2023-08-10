import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlatePubResolverBase } from "./base/mhciSlatePub.resolver.base";
import { MhciSlatePub } from "./base/MhciSlatePub";
import { MhciSlatePubService } from "./mhciSlatePub.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlatePub)
export class MhciSlatePubResolver extends MhciSlatePubResolverBase {
  constructor(
    protected readonly service: MhciSlatePubService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
