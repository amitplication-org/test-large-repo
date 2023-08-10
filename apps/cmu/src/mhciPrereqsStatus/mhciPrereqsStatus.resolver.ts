import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsStatusResolverBase } from "./base/mhciPrereqsStatus.resolver.base";
import { MhciPrereqsStatus } from "./base/MhciPrereqsStatus";
import { MhciPrereqsStatusService } from "./mhciPrereqsStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsStatus)
export class MhciPrereqsStatusResolver extends MhciPrereqsStatusResolverBase {
  constructor(
    protected readonly service: MhciPrereqsStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
