import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApplicationMergeFileResolverBase } from "./base/applicationMergeFile.resolver.base";
import { ApplicationMergeFile } from "./base/ApplicationMergeFile";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApplicationMergeFile)
export class ApplicationMergeFileResolver extends ApplicationMergeFileResolverBase {
  constructor(
    protected readonly service: ApplicationMergeFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
