import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MitsSlateAppSchoolResolverBase } from "./base/mitsSlateAppSchool.resolver.base";
import { MitsSlateAppSchool } from "./base/MitsSlateAppSchool";
import { MitsSlateAppSchoolService } from "./mitsSlateAppSchool.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MitsSlateAppSchool)
export class MitsSlateAppSchoolResolver extends MitsSlateAppSchoolResolverBase {
  constructor(
    protected readonly service: MitsSlateAppSchoolService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
