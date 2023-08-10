import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccesslogreplyformResolverBase } from "./base/accesslogreplyform.resolver.base";
import { Accesslogreplyform } from "./base/Accesslogreplyform";
import { AccesslogreplyformService } from "./accesslogreplyform.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Accesslogreplyform)
export class AccesslogreplyformResolver extends AccesslogreplyformResolverBase {
  constructor(
    protected readonly service: AccesslogreplyformService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
