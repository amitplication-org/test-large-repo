import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CmuAffiliationResolverBase } from "./base/cmuAffiliation.resolver.base";
import { CmuAffiliation } from "./base/CmuAffiliation";
import { CmuAffiliationService } from "./cmuAffiliation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CmuAffiliation)
export class CmuAffiliationResolver extends CmuAffiliationResolverBase {
  constructor(
    protected readonly service: CmuAffiliationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
