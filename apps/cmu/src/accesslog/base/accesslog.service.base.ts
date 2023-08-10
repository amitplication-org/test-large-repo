/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Accesslog } from "@prisma/client";

export class AccesslogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AccesslogCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogCountArgs>
  ): Promise<number> {
    return this.prisma.accesslog.count(args);
  }

  async findMany<T extends Prisma.AccesslogFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogFindManyArgs>
  ): Promise<Accesslog[]> {
    return this.prisma.accesslog.findMany(args);
  }
  async findOne<T extends Prisma.AccesslogFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogFindUniqueArgs>
  ): Promise<Accesslog | null> {
    return this.prisma.accesslog.findUnique(args);
  }
  async create<T extends Prisma.AccesslogCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogCreateArgs>
  ): Promise<Accesslog> {
    return this.prisma.accesslog.create<T>(args);
  }
  async update<T extends Prisma.AccesslogUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogUpdateArgs>
  ): Promise<Accesslog> {
    return this.prisma.accesslog.update<T>(args);
  }
  async delete<T extends Prisma.AccesslogDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AccesslogDeleteArgs>
  ): Promise<Accesslog> {
    return this.prisma.accesslog.delete(args);
  }
}
