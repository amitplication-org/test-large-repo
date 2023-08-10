/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateOrg } from "@prisma/client";

export class SlateOrgServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateOrgCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgCountArgs>
  ): Promise<number> {
    return this.prisma.slateOrg.count(args);
  }

  async findMany<T extends Prisma.SlateOrgFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgFindManyArgs>
  ): Promise<SlateOrg[]> {
    return this.prisma.slateOrg.findMany(args);
  }
  async findOne<T extends Prisma.SlateOrgFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgFindUniqueArgs>
  ): Promise<SlateOrg | null> {
    return this.prisma.slateOrg.findUnique(args);
  }
  async create<T extends Prisma.SlateOrgCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgCreateArgs>
  ): Promise<SlateOrg> {
    return this.prisma.slateOrg.create<T>(args);
  }
  async update<T extends Prisma.SlateOrgUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgUpdateArgs>
  ): Promise<SlateOrg> {
    return this.prisma.slateOrg.update<T>(args);
  }
  async delete<T extends Prisma.SlateOrgDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateOrgDeleteArgs>
  ): Promise<SlateOrg> {
    return this.prisma.slateOrg.delete(args);
  }
}
