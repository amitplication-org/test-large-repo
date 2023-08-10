/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Cohort } from "@prisma/client";

export class CohortServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CohortCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortCountArgs>
  ): Promise<number> {
    return this.prisma.cohort.count(args);
  }

  async findMany<T extends Prisma.CohortFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortFindManyArgs>
  ): Promise<Cohort[]> {
    return this.prisma.cohort.findMany(args);
  }
  async findOne<T extends Prisma.CohortFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortFindUniqueArgs>
  ): Promise<Cohort | null> {
    return this.prisma.cohort.findUnique(args);
  }
  async create<T extends Prisma.CohortCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortCreateArgs>
  ): Promise<Cohort> {
    return this.prisma.cohort.create<T>(args);
  }
  async update<T extends Prisma.CohortUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortUpdateArgs>
  ): Promise<Cohort> {
    return this.prisma.cohort.update<T>(args);
  }
  async delete<T extends Prisma.CohortDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CohortDeleteArgs>
  ): Promise<Cohort> {
    return this.prisma.cohort.delete(args);
  }
}
