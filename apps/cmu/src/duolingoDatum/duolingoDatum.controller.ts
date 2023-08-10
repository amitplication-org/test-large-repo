import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DuolingoDatumService } from "./duolingoDatum.service";
import { DuolingoDatumControllerBase } from "./base/duolingoDatum.controller.base";

@swagger.ApiTags("duolingoData")
@common.Controller("duolingoData")
export class DuolingoDatumController extends DuolingoDatumControllerBase {
  constructor(
    protected readonly service: DuolingoDatumService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
