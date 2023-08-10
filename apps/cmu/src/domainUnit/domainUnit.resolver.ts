import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DomainUnitResolverBase } from "./base/domainUnit.resolver.base";
import { DomainUnit } from "./base/DomainUnit";
import { DomainUnitService } from "./domainUnit.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DomainUnit)
export class DomainUnitResolver extends DomainUnitResolverBase {
  constructor(
    protected readonly service: DomainUnitService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
