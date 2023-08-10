import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ErrorlogService } from "./errorlog.service";
import { ErrorlogControllerBase } from "./base/errorlog.controller.base";

@swagger.ApiTags("errorlogs")
@common.Controller("errorlogs")
export class ErrorlogController extends ErrorlogControllerBase {
  constructor(
    protected readonly service: ErrorlogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
