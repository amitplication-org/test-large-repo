import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProgramGroupGroupTypeResolverBase } from "./base/programGroupGroupType.resolver.base";
import { ProgramGroupGroupType } from "./base/ProgramGroupGroupType";
import { ProgramGroupGroupTypeService } from "./programGroupGroupType.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProgramGroupGroupType)
export class ProgramGroupGroupTypeResolver extends ProgramGroupGroupTypeResolverBase {
  constructor(
    protected readonly service: ProgramGroupGroupTypeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
