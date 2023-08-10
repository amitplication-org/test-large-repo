import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PeriodUmbrellaService } from "./periodUmbrella.service";
import { PeriodUmbrellaControllerBase } from "./base/periodUmbrella.controller.base";

@swagger.ApiTags("periodUmbrellas")
@common.Controller("periodUmbrellas")
export class PeriodUmbrellaController extends PeriodUmbrellaControllerBase {
  constructor(
    protected readonly service: PeriodUmbrellaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
