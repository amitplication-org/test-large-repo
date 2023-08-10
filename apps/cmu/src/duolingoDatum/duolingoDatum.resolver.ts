import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DuolingoDatumResolverBase } from "./base/duolingoDatum.resolver.base";
import { DuolingoDatum } from "./base/DuolingoDatum";
import { DuolingoDatumService } from "./duolingoDatum.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DuolingoDatum)
export class DuolingoDatumResolver extends DuolingoDatumResolverBase {
  constructor(
    protected readonly service: DuolingoDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
