/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateReviewArgs } from "./CreateReviewArgs";
import { UpdateReviewArgs } from "./UpdateReviewArgs";
import { DeleteReviewArgs } from "./DeleteReviewArgs";
import { ReviewCountArgs } from "./ReviewCountArgs";
import { ReviewFindManyArgs } from "./ReviewFindManyArgs";
import { ReviewFindUniqueArgs } from "./ReviewFindUniqueArgs";
import { Review } from "./Review";
import { ReviewService } from "../review.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Review)
export class ReviewResolverBase {
  constructor(
    protected readonly service: ReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async _reviewsMeta(
    @graphql.Args() args: ReviewCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Review])
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async reviews(@graphql.Args() args: ReviewFindManyArgs): Promise<Review[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Review, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "own",
  })
  async review(
    @graphql.Args() args: ReviewFindUniqueArgs
  ): Promise<Review | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "create",
    possession: "any",
  })
  async createReview(@graphql.Args() args: CreateReviewArgs): Promise<Review> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "update",
    possession: "any",
  })
  async updateReview(
    @graphql.Args() args: UpdateReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Review)
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "delete",
    possession: "any",
  })
  async deleteReview(
    @graphql.Args() args: DeleteReviewArgs
  ): Promise<Review | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
