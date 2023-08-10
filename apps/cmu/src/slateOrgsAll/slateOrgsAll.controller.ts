import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateOrgsAllService } from "./slateOrgsAll.service";
import { SlateOrgsAllControllerBase } from "./base/slateOrgsAll.controller.base";

@swagger.ApiTags("slateOrgsAlls")
@common.Controller("slateOrgsAlls")
export class SlateOrgsAllController extends SlateOrgsAllControllerBase {
  constructor(
    protected readonly service: SlateOrgsAllService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
