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
import { CreateSlateEmail2awUserArgs } from "./CreateSlateEmail2awUserArgs";
import { UpdateSlateEmail2awUserArgs } from "./UpdateSlateEmail2awUserArgs";
import { DeleteSlateEmail2awUserArgs } from "./DeleteSlateEmail2awUserArgs";
import { SlateEmail2awUserCountArgs } from "./SlateEmail2awUserCountArgs";
import { SlateEmail2awUserFindManyArgs } from "./SlateEmail2awUserFindManyArgs";
import { SlateEmail2awUserFindUniqueArgs } from "./SlateEmail2awUserFindUniqueArgs";
import { SlateEmail2awUser } from "./SlateEmail2awUser";
import { SlateEmail2awUserService } from "../slateEmail2awUser.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SlateEmail2awUser)
export class SlateEmail2awUserResolverBase {
  constructor(
    protected readonly service: SlateEmail2awUserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "read",
    possession: "any",
  })
  async _slateEmail2awUsersMeta(
    @graphql.Args() args: SlateEmail2awUserCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SlateEmail2awUser])
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "read",
    possession: "any",
  })
  async slateEmail2awUsers(
    @graphql.Args() args: SlateEmail2awUserFindManyArgs
  ): Promise<SlateEmail2awUser[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SlateEmail2awUser, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "read",
    possession: "own",
  })
  async slateEmail2awUser(
    @graphql.Args() args: SlateEmail2awUserFindUniqueArgs
  ): Promise<SlateEmail2awUser | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateEmail2awUser)
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "create",
    possession: "any",
  })
  async createSlateEmail2awUser(
    @graphql.Args() args: CreateSlateEmail2awUserArgs
  ): Promise<SlateEmail2awUser> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SlateEmail2awUser)
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "update",
    possession: "any",
  })
  async updateSlateEmail2awUser(
    @graphql.Args() args: UpdateSlateEmail2awUserArgs
  ): Promise<SlateEmail2awUser | null> {
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

  @graphql.Mutation(() => SlateEmail2awUser)
  @nestAccessControl.UseRoles({
    resource: "SlateEmail2awUser",
    action: "delete",
    possession: "any",
  })
  async deleteSlateEmail2awUser(
    @graphql.Args() args: DeleteSlateEmail2awUserArgs
  ): Promise<SlateEmail2awUser | null> {
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
