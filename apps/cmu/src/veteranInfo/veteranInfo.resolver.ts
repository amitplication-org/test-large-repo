import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VeteranInfoResolverBase } from "./base/veteranInfo.resolver.base";
import { VeteranInfo } from "./base/VeteranInfo";
import { VeteranInfoService } from "./veteranInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VeteranInfo)
export class VeteranInfoResolver extends VeteranInfoResolverBase {
  constructor(
    protected readonly service: VeteranInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
