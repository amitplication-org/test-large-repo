import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ToeflEssentialResolverBase } from "./base/toeflEssential.resolver.base";
import { ToeflEssential } from "./base/ToeflEssential";
import { ToeflEssentialService } from "./toeflEssential.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ToeflEssential)
export class ToeflEssentialResolver extends ToeflEssentialResolverBase {
  constructor(
    protected readonly service: ToeflEssentialService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
