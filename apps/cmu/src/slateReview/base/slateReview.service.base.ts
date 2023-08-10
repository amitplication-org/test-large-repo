/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SlateReview } from "@prisma/client";

export class SlateReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SlateReviewCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewCountArgs>
  ): Promise<number> {
    return this.prisma.slateReview.count(args);
  }

  async findMany<T extends Prisma.SlateReviewFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewFindManyArgs>
  ): Promise<SlateReview[]> {
    return this.prisma.slateReview.findMany(args);
  }
  async findOne<T extends Prisma.SlateReviewFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewFindUniqueArgs>
  ): Promise<SlateReview | null> {
    return this.prisma.slateReview.findUnique(args);
  }
  async create<T extends Prisma.SlateReviewCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewCreateArgs>
  ): Promise<SlateReview> {
    return this.prisma.slateReview.create<T>(args);
  }
  async update<T extends Prisma.SlateReviewUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewUpdateArgs>
  ): Promise<SlateReview> {
    return this.prisma.slateReview.update<T>(args);
  }
  async delete<T extends Prisma.SlateReviewDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SlateReviewDeleteArgs>
  ): Promise<SlateReview> {
    return this.prisma.slateReview.delete(args);
  }
}
