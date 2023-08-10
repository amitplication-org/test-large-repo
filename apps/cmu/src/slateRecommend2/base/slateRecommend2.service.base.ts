/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateRecommend2 } from "@prisma/client";

export class SlateRecommend2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateRecommend2CountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2CountArgs>
  ): Promise<number> {
    return this.prisma.slateRecommend2.count(args);
  }

  async findMany<T extends Prisma.SlateRecommend2FindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2FindManyArgs>
  ): Promise<SlateRecommend2[]> {
    return this.prisma.slateRecommend2.findMany(args);
  }
  async findOne<T extends Prisma.SlateRecommend2FindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2FindUniqueArgs>
  ): Promise<SlateRecommend2 | null> {
    return this.prisma.slateRecommend2.findUnique(args);
  }
  async create<T extends Prisma.SlateRecommend2CreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2CreateArgs>
  ): Promise<SlateRecommend2> {
    return this.prisma.slateRecommend2.create<T>(args);
  }
  async update<T extends Prisma.SlateRecommend2UpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2UpdateArgs>
  ): Promise<SlateRecommend2> {
    return this.prisma.slateRecommend2.update<T>(args);
  }
  async delete<T extends Prisma.SlateRecommend2DeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateRecommend2DeleteArgs>
  ): Promise<SlateRecommend2> {
    return this.prisma.slateRecommend2.delete(args);
  }
}
