/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AaDepartment } from "@prisma/client";

export class AaDepartmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AaDepartmentCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentCountArgs>
  ): Promise<number> {
    return this.prisma.aaDepartment.count(args);
  }

  async findMany<T extends Prisma.AaDepartmentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentFindManyArgs>
  ): Promise<AaDepartment[]> {
    return this.prisma.aaDepartment.findMany(args);
  }
  async findOne<T extends Prisma.AaDepartmentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentFindUniqueArgs>
  ): Promise<AaDepartment | null> {
    return this.prisma.aaDepartment.findUnique(args);
  }
  async create<T extends Prisma.AaDepartmentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentCreateArgs>
  ): Promise<AaDepartment> {
    return this.prisma.aaDepartment.create<T>(args);
  }
  async update<T extends Prisma.AaDepartmentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentUpdateArgs>
  ): Promise<AaDepartment> {
    return this.prisma.aaDepartment.update<T>(args);
  }
  async delete<T extends Prisma.AaDepartmentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AaDepartmentDeleteArgs>
  ): Promise<AaDepartment> {
    return this.prisma.aaDepartment.delete(args);
  }
}
