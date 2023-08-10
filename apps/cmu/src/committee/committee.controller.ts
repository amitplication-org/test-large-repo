import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommitteeService } from "./committee.service";
import { CommitteeControllerBase } from "./base/committee.controller.base";

@swagger.ApiTags("committees")
@common.Controller("committees")
export class CommitteeController extends CommitteeControllerBase {
  constructor(
    protected readonly service: CommitteeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
