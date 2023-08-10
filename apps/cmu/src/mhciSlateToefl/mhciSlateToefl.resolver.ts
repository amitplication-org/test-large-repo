import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciSlateToeflResolverBase } from "./base/mhciSlateToefl.resolver.base";
import { MhciSlateToefl } from "./base/MhciSlateToefl";
import { MhciSlateToeflService } from "./mhciSlateToefl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlateToefl)
export class MhciSlateToeflResolver extends MhciSlateToeflResolverBase {
  constructor(
    protected readonly service: MhciSlateToeflService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
