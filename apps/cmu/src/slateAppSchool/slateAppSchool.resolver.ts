import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SlateAppSchoolResolverBase } from "./base/slateAppSchool.resolver.base";
import { SlateAppSchool } from "./base/SlateAppSchool";
import { SlateAppSchoolService } from "./slateAppSchool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateAppSchool)
export class SlateAppSchoolResolver extends SlateAppSchoolResolverBase {
  constructor(
    protected readonly service: SlateAppSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
