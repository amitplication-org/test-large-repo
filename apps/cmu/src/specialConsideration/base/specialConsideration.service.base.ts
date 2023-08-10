/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SpecialConsideration } from "@prisma/client";

export class SpecialConsiderationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SpecialConsiderationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationCountArgs>
  ): Promise<number> {
    return this.prisma.specialConsideration.count(args);
  }

  async findMany<T extends Prisma.SpecialConsiderationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationFindManyArgs>
  ): Promise<SpecialConsideration[]> {
    return this.prisma.specialConsideration.findMany(args);
  }
  async findOne<T extends Prisma.SpecialConsiderationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationFindUniqueArgs>
  ): Promise<SpecialConsideration | null> {
    return this.prisma.specialConsideration.findUnique(args);
  }
  async create<T extends Prisma.SpecialConsiderationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationCreateArgs>
  ): Promise<SpecialConsideration> {
    return this.prisma.specialConsideration.create<T>(args);
  }
  async update<T extends Prisma.SpecialConsiderationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationUpdateArgs>
  ): Promise<SpecialConsideration> {
    return this.prisma.specialConsideration.update<T>(args);
  }
  async delete<T extends Prisma.SpecialConsiderationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SpecialConsiderationDeleteArgs>
  ): Promise<SpecialConsideration> {
    return this.prisma.specialConsideration.delete(args);
  }
}
