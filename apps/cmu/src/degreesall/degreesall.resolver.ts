import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DegreesallResolverBase } from "./base/degreesall.resolver.base";
import { Degreesall } from "./base/Degreesall";
import { DegreesallService } from "./degreesall.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Degreesall)
export class DegreesallResolver extends DegreesallResolverBase {
  constructor(
    protected readonly service: DegreesallService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
