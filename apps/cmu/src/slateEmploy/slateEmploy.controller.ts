import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateEmployService } from "./slateEmploy.service";
import { SlateEmployControllerBase } from "./base/slateEmploy.controller.base";

@swagger.ApiTags("slateEmploys")
@common.Controller("slateEmploys")
export class SlateEmployController extends SlateEmployControllerBase {
  constructor(
    protected readonly service: SlateEmployService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
