import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateEmployResolverBase } from "./base/slateEmploy.resolver.base";
import { SlateEmploy } from "./base/SlateEmploy";
import { SlateEmployService } from "./slateEmploy.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateEmploy)
export class SlateEmployResolver extends SlateEmployResolverBase {
  constructor(
    protected readonly service: SlateEmployService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
