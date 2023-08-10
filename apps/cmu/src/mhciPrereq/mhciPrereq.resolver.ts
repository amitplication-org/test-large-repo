import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqResolverBase } from "./base/mhciPrereq.resolver.base";
import { MhciPrereq } from "./base/MhciPrereq";
import { MhciPrereqService } from "./mhciPrereq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereq)
export class MhciPrereqResolver extends MhciPrereqResolverBase {
  constructor(
    protected readonly service: MhciPrereqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
