import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LuApplicationStartSemesterResolverBase } from "./base/luApplicationStartSemester.resolver.base";
import { LuApplicationStartSemester } from "./base/LuApplicationStartSemester";
import { LuApplicationStartSemesterService } from "./luApplicationStartSemester.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LuApplicationStartSemester)
export class LuApplicationStartSemesterResolver extends LuApplicationStartSemesterResolverBase {
  constructor(
    protected readonly service: LuApplicationStartSemesterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
