import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RejectionWaiverService } from "./rejectionWaiver.service";
import { RejectionWaiverControllerBase } from "./base/rejectionWaiver.controller.base";

@swagger.ApiTags("rejectionWaivers")
@common.Controller("rejectionWaivers")
export class RejectionWaiverController extends RejectionWaiverControllerBase {
  constructor(
    protected readonly service: RejectionWaiverService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
