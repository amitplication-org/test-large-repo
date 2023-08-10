import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateToeflResolverBase } from "./base/mitsSlateToefl.resolver.base";
import { MitsSlateToefl } from "./base/MitsSlateToefl";
import { MitsSlateToeflService } from "./mitsSlateToefl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateToefl)
export class MitsSlateToeflResolver extends MitsSlateToeflResolverBase {
  constructor(
    protected readonly service: MitsSlateToeflService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
