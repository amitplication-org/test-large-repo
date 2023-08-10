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
import { CreateAccesslogreplyformArgs } from "./CreateAccesslogreplyformArgs";
import { UpdateAccesslogreplyformArgs } from "./UpdateAccesslogreplyformArgs";
import { DeleteAccesslogreplyformArgs } from "./DeleteAccesslogreplyformArgs";
import { AccesslogreplyformCountArgs } from "./AccesslogreplyformCountArgs";
import { AccesslogreplyformFindManyArgs } from "./AccesslogreplyformFindManyArgs";
import { AccesslogreplyformFindUniqueArgs } from "./AccesslogreplyformFindUniqueArgs";
import { Accesslogreplyform } from "./Accesslogreplyform";
import { AccesslogreplyformService } from "../accesslogreplyform.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Accesslogreplyform)
export class AccesslogreplyformResolverBase {
  constructor(
    protected readonly service: AccesslogreplyformService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "read",
    possession: "any",
  })
  async _accesslogreplyformsMeta(
    @graphql.Args() args: AccesslogreplyformCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Accesslogreplyform])
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "read",
    possession: "any",
  })
  async accesslogreplyforms(
    @graphql.Args() args: AccesslogreplyformFindManyArgs
  ): Promise<Accesslogreplyform[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Accesslogreplyform, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "read",
    possession: "own",
  })
  async accesslogreplyform(
    @graphql.Args() args: AccesslogreplyformFindUniqueArgs
  ): Promise<Accesslogreplyform | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Accesslogreplyform)
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "create",
    possession: "any",
  })
  async createAccesslogreplyform(
    @graphql.Args() args: CreateAccesslogreplyformArgs
  ): Promise<Accesslogreplyform> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Accesslogreplyform)
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "update",
    possession: "any",
  })
  async updateAccesslogreplyform(
    @graphql.Args() args: UpdateAccesslogreplyformArgs
  ): Promise<Accesslogreplyform | null> {
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

  @graphql.Mutation(() => Accesslogreplyform)
  @nestAccessControl.UseRoles({
    resource: "Accesslogreplyform",
    action: "delete",
    possession: "any",
  })
  async deleteAccesslogreplyform(
    @graphql.Args() args: DeleteAccesslogreplyformArgs
  ): Promise<Accesslogreplyform | null> {
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
