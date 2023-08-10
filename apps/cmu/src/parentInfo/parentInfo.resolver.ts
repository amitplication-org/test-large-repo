import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParentInfoResolverBase } from "./base/parentInfo.resolver.base";
import { ParentInfo } from "./base/ParentInfo";
import { ParentInfoService } from "./parentInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParentInfo)
export class ParentInfoResolver extends ParentInfoResolverBase {
  constructor(
    protected readonly service: ParentInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
