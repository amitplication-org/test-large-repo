import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsProgrammingSampleResolverBase } from "./base/mhciPrereqsProgrammingSample.resolver.base";
import { MhciPrereqsProgrammingSample } from "./base/MhciPrereqsProgrammingSample";
import { MhciPrereqsProgrammingSampleService } from "./mhciPrereqsProgrammingSample.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsProgrammingSample)
export class MhciPrereqsProgrammingSampleResolver extends MhciPrereqsProgrammingSampleResolverBase {
  constructor(
    protected readonly service: MhciPrereqsProgrammingSampleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
