import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WaiverOrgResolverBase } from "./base/waiverOrg.resolver.base";
import { WaiverOrg } from "./base/WaiverOrg";
import { WaiverOrgService } from "./waiverOrg.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WaiverOrg)
export class WaiverOrgResolver extends WaiverOrgResolverBase {
  constructor(
    protected readonly service: WaiverOrgService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
