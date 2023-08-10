import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsCourseDatafileResolverBase } from "./base/mhciPrereqsCourseDatafile.resolver.base";
import { MhciPrereqsCourseDatafile } from "./base/MhciPrereqsCourseDatafile";
import { MhciPrereqsCourseDatafileService } from "./mhciPrereqsCourseDatafile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsCourseDatafile)
export class MhciPrereqsCourseDatafileResolver extends MhciPrereqsCourseDatafileResolverBase {
  constructor(
    protected readonly service: MhciPrereqsCourseDatafileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
