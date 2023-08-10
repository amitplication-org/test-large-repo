import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DuolingoscoreResolverBase } from "./base/duolingoscore.resolver.base";
import { Duolingoscore } from "./base/Duolingoscore";
import { DuolingoscoreService } from "./duolingoscore.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Duolingoscore)
export class DuolingoscoreResolver extends DuolingoscoreResolverBase {
  constructor(
    protected readonly service: DuolingoscoreService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
