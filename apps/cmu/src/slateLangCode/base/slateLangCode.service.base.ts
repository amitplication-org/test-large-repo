/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateLangCode } from "@prisma/client";

export class SlateLangCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateLangCodeCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeCountArgs>
  ): Promise<number> {
    return this.prisma.slateLangCode.count(args);
  }

  async findMany<T extends Prisma.SlateLangCodeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeFindManyArgs>
  ): Promise<SlateLangCode[]> {
    return this.prisma.slateLangCode.findMany(args);
  }
  async findOne<T extends Prisma.SlateLangCodeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeFindUniqueArgs>
  ): Promise<SlateLangCode | null> {
    return this.prisma.slateLangCode.findUnique(args);
  }
  async create<T extends Prisma.SlateLangCodeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeCreateArgs>
  ): Promise<SlateLangCode> {
    return this.prisma.slateLangCode.create<T>(args);
  }
  async update<T extends Prisma.SlateLangCodeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeUpdateArgs>
  ): Promise<SlateLangCode> {
    return this.prisma.slateLangCode.update<T>(args);
  }
  async delete<T extends Prisma.SlateLangCodeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateLangCodeDeleteArgs>
  ): Promise<SlateLangCode> {
    return this.prisma.slateLangCode.delete(args);
  }
}
