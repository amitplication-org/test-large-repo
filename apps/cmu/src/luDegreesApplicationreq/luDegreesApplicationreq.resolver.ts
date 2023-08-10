import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuDegreesApplicationreqResolverBase } from "./base/luDegreesApplicationreq.resolver.base";
import { LuDegreesApplicationreq } from "./base/LuDegreesApplicationreq";
import { LuDegreesApplicationreqService } from "./luDegreesApplicationreq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuDegreesApplicationreq)
export class LuDegreesApplicationreqResolver extends LuDegreesApplicationreqResolverBase {
  constructor(
    protected readonly service: LuDegreesApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
