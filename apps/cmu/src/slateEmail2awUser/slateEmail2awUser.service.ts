import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SlateEmail2awUserServiceBase } from "./base/slateEmail2awUser.service.base";

@Injectable()
export class SlateEmail2awUserService extends SlateEmail2awUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
