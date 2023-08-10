import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MergeApplicationService } from "./mergeApplication.service";
import { MergeApplicationControllerBase } from "./base/mergeApplication.controller.base";

@swagger.ApiTags("mergeApplications")
@common.Controller("mergeApplications")
export class MergeApplicationController extends MergeApplicationControllerBase {
  constructor(
    protected readonly service: MergeApplicationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
