import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DietrichSharingResolverBase } from "./base/dietrichSharing.resolver.base";
import { DietrichSharing } from "./base/DietrichSharing";
import { DietrichSharingService } from "./dietrichSharing.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DietrichSharing)
export class DietrichSharingResolver extends DietrichSharingResolverBase {
  constructor(
    protected readonly service: DietrichSharingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
