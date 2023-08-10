import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationProgramLetterResolverBase } from "./base/applicationProgramLetter.resolver.base";
import { ApplicationProgramLetter } from "./base/ApplicationProgramLetter";
import { ApplicationProgramLetterService } from "./applicationProgramLetter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationProgramLetter)
export class ApplicationProgramLetterResolver extends ApplicationProgramLetterResolverBase {
  constructor(
    protected readonly service: ApplicationProgramLetterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
