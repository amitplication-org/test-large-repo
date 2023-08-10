import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MitsSlateToeflService } from "./mitsSlateToefl.service";
import { MitsSlateToeflControllerBase } from "./base/mitsSlateToefl.controller.base";

@swagger.ApiTags("mitsSlateToefls")
@common.Controller("mitsSlateToefls")
export class MitsSlateToeflController extends MitsSlateToeflControllerBase {
  constructor(
    protected readonly service: MitsSlateToeflService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
