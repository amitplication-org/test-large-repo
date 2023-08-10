import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApplicationMergeFileService } from "./applicationMergeFile.service";
import { ApplicationMergeFileControllerBase } from "./base/applicationMergeFile.controller.base";

@swagger.ApiTags("applicationMergeFiles")
@common.Controller("applicationMergeFiles")
export class ApplicationMergeFileController extends ApplicationMergeFileControllerBase {
  constructor(
    protected readonly service: ApplicationMergeFileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
