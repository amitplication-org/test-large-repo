import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateSuppinfoResolverBase } from "./base/mitsSlateSuppinfo.resolver.base";
import { MitsSlateSuppinfo } from "./base/MitsSlateSuppinfo";
import { MitsSlateSuppinfoService } from "./mitsSlateSuppinfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateSuppinfo)
export class MitsSlateSuppinfoResolver extends MitsSlateSuppinfoResolverBase {
  constructor(
    protected readonly service: MitsSlateSuppinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
