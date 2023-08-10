import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Em2SopResolverBase } from "./base/em2Sop.resolver.base";
import { Em2Sop } from "./base/Em2Sop";
import { Em2SopService } from "./em2Sop.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Em2Sop)
export class Em2SopResolver extends Em2SopResolverBase {
  constructor(
    protected readonly service: Em2SopService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
