import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateOrgsAllResolverBase } from "./base/slateOrgsAll.resolver.base";
import { SlateOrgsAll } from "./base/SlateOrgsAll";
import { SlateOrgsAllService } from "./slateOrgsAll.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateOrgsAll)
export class SlateOrgsAllResolver extends SlateOrgsAllResolverBase {
  constructor(
    protected readonly service: SlateOrgsAllService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
