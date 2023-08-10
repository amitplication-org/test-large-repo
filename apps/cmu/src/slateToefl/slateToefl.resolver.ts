import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateToeflResolverBase } from "./base/slateToefl.resolver.base";
import { SlateToefl } from "./base/SlateToefl";
import { SlateToeflService } from "./slateToefl.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateToefl)
export class SlateToeflResolver extends SlateToeflResolverBase {
  constructor(
    protected readonly service: SlateToeflService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
