import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsHSStatusServiceBase } from "./base/usHsStatus.service.base";

@Injectable()
export class UsHSStatusService extends UsHSStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
