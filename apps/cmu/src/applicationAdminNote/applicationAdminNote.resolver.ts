import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationAdminNoteResolverBase } from "./base/applicationAdminNote.resolver.base";
import { ApplicationAdminNote } from "./base/ApplicationAdminNote";
import { ApplicationAdminNoteService } from "./applicationAdminNote.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationAdminNote)
export class ApplicationAdminNoteResolver extends ApplicationAdminNoteResolverBase {
  constructor(
    protected readonly service: ApplicationAdminNoteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
