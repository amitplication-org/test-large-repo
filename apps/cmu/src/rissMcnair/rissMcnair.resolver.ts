import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RissMcnairResolverBase } from "./base/rissMcnair.resolver.base";
import { RissMcnair } from "./base/RissMcnair";
import { RissMcnairService } from "./rissMcnair.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RissMcnair)
export class RissMcnairResolver extends RissMcnairResolverBase {
  constructor(
    protected readonly service: RissMcnairService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
