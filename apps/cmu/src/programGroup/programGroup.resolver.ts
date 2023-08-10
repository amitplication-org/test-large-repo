import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramGroupResolverBase } from "./base/programGroup.resolver.base";
import { ProgramGroup } from "./base/ProgramGroup";
import { ProgramGroupService } from "./programGroup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroup)
export class ProgramGroupResolver extends ProgramGroupResolverBase {
  constructor(
    protected readonly service: ProgramGroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
