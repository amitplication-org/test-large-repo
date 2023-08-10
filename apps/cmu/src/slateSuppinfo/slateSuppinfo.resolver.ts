import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateSuppinfoResolverBase } from "./base/slateSuppinfo.resolver.base";
import { SlateSuppinfo } from "./base/SlateSuppinfo";
import { SlateSuppinfoService } from "./slateSuppinfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateSuppinfo)
export class SlateSuppinfoResolver extends SlateSuppinfoResolverBase {
  constructor(
    protected readonly service: SlateSuppinfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
