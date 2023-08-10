import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FolderLabelInfoResolverBase } from "./base/folderLabelInfo.resolver.base";
import { FolderLabelInfo } from "./base/FolderLabelInfo";
import { FolderLabelInfoService } from "./folderLabelInfo.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FolderLabelInfo)
export class FolderLabelInfoResolver extends FolderLabelInfoResolverBase {
  constructor(
    protected readonly service: FolderLabelInfoService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
