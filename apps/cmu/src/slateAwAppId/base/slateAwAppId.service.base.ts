/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateAwAppId } from "@prisma/client";

export class SlateAwAppIdServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateAwAppIdCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdCountArgs>
  ): Promise<number> {
    return this.prisma.slateAwAppId.count(args);
  }

  async findMany<T extends Prisma.SlateAwAppIdFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdFindManyArgs>
  ): Promise<SlateAwAppId[]> {
    return this.prisma.slateAwAppId.findMany(args);
  }
  async findOne<T extends Prisma.SlateAwAppIdFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdFindUniqueArgs>
  ): Promise<SlateAwAppId | null> {
    return this.prisma.slateAwAppId.findUnique(args);
  }
  async create<T extends Prisma.SlateAwAppIdCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdCreateArgs>
  ): Promise<SlateAwAppId> {
    return this.prisma.slateAwAppId.create<T>(args);
  }
  async update<T extends Prisma.SlateAwAppIdUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdUpdateArgs>
  ): Promise<SlateAwAppId> {
    return this.prisma.slateAwAppId.update<T>(args);
  }
  async delete<T extends Prisma.SlateAwAppIdDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateAwAppIdDeleteArgs>
  ): Promise<SlateAwAppId> {
    return this.prisma.slateAwAppId.delete(args);
  }
}
