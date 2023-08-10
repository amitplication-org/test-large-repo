/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, UsHSStatus } from "@prisma/client";

export class UsHSStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.UsHSStatusCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusCountArgs>
  ): Promise<number> {
    return this.prisma.usHsStatus.count(args);
  }

  async findMany<T extends Prisma.UsHSStatusFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusFindManyArgs>
  ): Promise<UsHSStatus[]> {
    return this.prisma.usHsStatus.findMany(args);
  }
  async findOne<T extends Prisma.UsHSStatusFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusFindUniqueArgs>
  ): Promise<UsHSStatus | null> {
    return this.prisma.usHsStatus.findUnique(args);
  }
  async create<T extends Prisma.UsHSStatusCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusCreateArgs>
  ): Promise<UsHSStatus> {
    return this.prisma.usHsStatus.create<T>(args);
  }
  async update<T extends Prisma.UsHSStatusUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusUpdateArgs>
  ): Promise<UsHSStatus> {
    return this.prisma.usHsStatus.update<T>(args);
  }
  async delete<T extends Prisma.UsHSStatusDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UsHSStatusDeleteArgs>
  ): Promise<UsHSStatus> {
    return this.prisma.usHsStatus.delete(args);
  }
}
