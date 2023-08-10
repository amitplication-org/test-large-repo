import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MhciPrereqsProgrammingTestResolverBase } from "./base/mhciPrereqsProgrammingTest.resolver.base";
import { MhciPrereqsProgrammingTest } from "./base/MhciPrereqsProgrammingTest";
import { MhciPrereqsProgrammingTestService } from "./mhciPrereqsProgrammingTest.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsProgrammingTest)
export class MhciPrereqsProgrammingTestResolver extends MhciPrereqsProgrammingTestResolverBase {
  constructor(
    protected readonly service: MhciPrereqsProgrammingTestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
