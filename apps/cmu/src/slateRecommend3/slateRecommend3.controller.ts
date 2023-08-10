import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SlateRecommend3Service } from "./slateRecommend3.service";
import { SlateRecommend3ControllerBase } from "./base/slateRecommend3.controller.base";

@swagger.ApiTags("slateRecommend3s")
@common.Controller("slateRecommend3s")
export class SlateRecommend3Controller extends SlateRecommend3ControllerBase {
  constructor(
    protected readonly service: SlateRecommend3Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
