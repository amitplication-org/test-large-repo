import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DisabilityTypeResolverBase } from "./base/disabilityType.resolver.base";
import { DisabilityType } from "./base/DisabilityType";
import { DisabilityTypeService } from "./disabilityType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DisabilityType)
export class DisabilityTypeResolver extends DisabilityTypeResolverBase {
  constructor(
    protected readonly service: DisabilityTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
