import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GrescoreMscsWaiverResolverBase } from "./base/grescoreMscsWaiver.resolver.base";
import { GrescoreMscsWaiver } from "./base/GrescoreMscsWaiver";
import { GrescoreMscsWaiverService } from "./grescoreMscsWaiver.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GrescoreMscsWaiver)
export class GrescoreMscsWaiverResolver extends GrescoreMscsWaiverResolverBase {
  constructor(
    protected readonly service: GrescoreMscsWaiverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
