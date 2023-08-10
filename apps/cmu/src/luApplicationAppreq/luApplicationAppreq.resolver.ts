import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationAppreqResolverBase } from "./base/luApplicationAppreq.resolver.base";
import { LuApplicationAppreq } from "./base/LuApplicationAppreq";
import { LuApplicationAppreqService } from "./luApplicationAppreq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationAppreq)
export class LuApplicationAppreqResolver extends LuApplicationAppreqResolverBase {
  constructor(
    protected readonly service: LuApplicationAppreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
