import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReviewIniAdminService } from "./reviewIniAdmin.service";
import { ReviewIniAdminControllerBase } from "./base/reviewIniAdmin.controller.base";

@swagger.ApiTags("reviewIniAdmins")
@common.Controller("reviewIniAdmins")
export class ReviewIniAdminController extends ReviewIniAdminControllerBase {
  constructor(
    protected readonly service: ReviewIniAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
