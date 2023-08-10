import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationreqResolverBase } from "./base/applicationreq.resolver.base";
import { Applicationreq } from "./base/Applicationreq";
import { ApplicationreqService } from "./applicationreq.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Applicationreq)
export class ApplicationreqResolver extends ApplicationreqResolverBase {
  constructor(
    protected readonly service: ApplicationreqService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
