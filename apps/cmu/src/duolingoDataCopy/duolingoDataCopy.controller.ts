import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DuolingoDataCopyService } from "./duolingoDataCopy.service";
import { DuolingoDataCopyControllerBase } from "./base/duolingoDataCopy.controller.base";

@swagger.ApiTags("duolingoDataCopies")
@common.Controller("duolingoDataCopies")
export class DuolingoDataCopyController extends DuolingoDataCopyControllerBase {
  constructor(
    protected readonly service: DuolingoDataCopyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
