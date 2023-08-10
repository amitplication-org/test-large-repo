/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, StudentDecisionHistory } from "@prisma/client";

export class StudentDecisionHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.StudentDecisionHistoryCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryCountArgs>
  ): Promise<number> {
    return this.prisma.studentDecisionHistory.count(args);
  }

  async findMany<T extends Prisma.StudentDecisionHistoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryFindManyArgs>
  ): Promise<StudentDecisionHistory[]> {
    return this.prisma.studentDecisionHistory.findMany(args);
  }
  async findOne<T extends Prisma.StudentDecisionHistoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryFindUniqueArgs>
  ): Promise<StudentDecisionHistory | null> {
    return this.prisma.studentDecisionHistory.findUnique(args);
  }
  async create<T extends Prisma.StudentDecisionHistoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryCreateArgs>
  ): Promise<StudentDecisionHistory> {
    return this.prisma.studentDecisionHistory.create<T>(args);
  }
  async update<T extends Prisma.StudentDecisionHistoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryUpdateArgs>
  ): Promise<StudentDecisionHistory> {
    return this.prisma.studentDecisionHistory.update<T>(args);
  }
  async delete<T extends Prisma.StudentDecisionHistoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StudentDecisionHistoryDeleteArgs>
  ): Promise<StudentDecisionHistory> {
    return this.prisma.studentDecisionHistory.delete(args);
  }
}
