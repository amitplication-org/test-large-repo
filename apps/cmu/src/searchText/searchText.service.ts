import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SearchTextServiceBase } from "./base/searchText.service.base";

@Injectable()
export class SearchTextService extends SearchTextServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
