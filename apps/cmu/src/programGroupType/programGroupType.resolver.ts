import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramGroupTypeResolverBase } from "./base/programGroupType.resolver.base";
import { ProgramGroupType } from "./base/ProgramGroupType";
import { ProgramGroupTypeService } from "./programGroupType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroupType)
export class ProgramGroupTypeResolver extends ProgramGroupTypeResolverBase {
  constructor(
    protected readonly service: ProgramGroupTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
