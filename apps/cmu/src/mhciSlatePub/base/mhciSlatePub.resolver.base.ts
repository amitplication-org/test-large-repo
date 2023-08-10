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
import { CreateMhciSlatePubArgs } from "./CreateMhciSlatePubArgs";
import { UpdateMhciSlatePubArgs } from "./UpdateMhciSlatePubArgs";
import { DeleteMhciSlatePubArgs } from "./DeleteMhciSlatePubArgs";
import { MhciSlatePubCountArgs } from "./MhciSlatePubCountArgs";
import { MhciSlatePubFindManyArgs } from "./MhciSlatePubFindManyArgs";
import { MhciSlatePubFindUniqueArgs } from "./MhciSlatePubFindUniqueArgs";
import { MhciSlatePub } from "./MhciSlatePub";
import { MhciSlatePubService } from "../mhciSlatePub.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciSlatePub)
export class MhciSlatePubResolverBase {
  constructor(
    protected readonly service: MhciSlatePubService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "read",
    possession: "any",
  })
  async _mhciSlatePubsMeta(
    @graphql.Args() args: MhciSlatePubCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MhciSlatePub])
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "read",
    possession: "any",
  })
  async mhciSlatePubs(
    @graphql.Args() args: MhciSlatePubFindManyArgs
  ): Promise<MhciSlatePub[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MhciSlatePub, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "read",
    possession: "own",
  })
  async mhciSlatePub(
    @graphql.Args() args: MhciSlatePubFindUniqueArgs
  ): Promise<MhciSlatePub | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MhciSlatePub)
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "create",
    possession: "any",
  })
  async createMhciSlatePub(
    @graphql.Args() args: CreateMhciSlatePubArgs
  ): Promise<MhciSlatePub> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MhciSlatePub)
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "update",
    possession: "any",
  })
  async updateMhciSlatePub(
    @graphql.Args() args: UpdateMhciSlatePubArgs
  ): Promise<MhciSlatePub | null> {
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

  @graphql.Mutation(() => MhciSlatePub)
  @nestAccessControl.UseRoles({
    resource: "MhciSlatePub",
    action: "delete",
    possession: "any",
  })
  async deleteMhciSlatePub(
    @graphql.Args() args: DeleteMhciSlatePubArgs
  ): Promise<MhciSlatePub | null> {
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
