import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateToeflService } from "./slateToefl.service";
import { SlateToeflControllerBase } from "./base/slateToefl.controller.base";

@swagger.ApiTags("slateToefls")
@common.Controller("slateToefls")
export class SlateToeflController extends SlateToeflControllerBase {
  constructor(
    protected readonly service: SlateToeflService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
