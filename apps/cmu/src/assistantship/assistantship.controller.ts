import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssistantshipService } from "./assistantship.service";
import { AssistantshipControllerBase } from "./base/assistantship.controller.base";

@swagger.ApiTags("assistantships")
@common.Controller("assistantships")
export class AssistantshipController extends AssistantshipControllerBase {
  constructor(
    protected readonly service: AssistantshipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
