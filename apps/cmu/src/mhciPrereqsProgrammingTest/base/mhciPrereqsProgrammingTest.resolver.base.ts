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
import { CreateMhciPrereqsProgrammingTestArgs } from "./CreateMhciPrereqsProgrammingTestArgs";
import { UpdateMhciPrereqsProgrammingTestArgs } from "./UpdateMhciPrereqsProgrammingTestArgs";
import { DeleteMhciPrereqsProgrammingTestArgs } from "./DeleteMhciPrereqsProgrammingTestArgs";
import { MhciPrereqsProgrammingTestCountArgs } from "./MhciPrereqsProgrammingTestCountArgs";
import { MhciPrereqsProgrammingTestFindManyArgs } from "./MhciPrereqsProgrammingTestFindManyArgs";
import { MhciPrereqsProgrammingTestFindUniqueArgs } from "./MhciPrereqsProgrammingTestFindUniqueArgs";
import { MhciPrereqsProgrammingTest } from "./MhciPrereqsProgrammingTest";
import { MhciPrereqsProgrammingTestService } from "../mhciPrereqsProgrammingTest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MhciPrereqsProgrammingTest)
export class MhciPrereqsProgrammingTestResolverBase {
  constructor(
    protected readonly service: MhciPrereqsProgrammingTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "read",
    possession: "any",
  })
  async _mhciPrereqsProgrammingTestsMeta(
    @graphql.Args() args: MhciPrereqsProgrammingTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MhciPrereqsProgrammingTest])
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "read",
    possession: "any",
  })
  async mhciPrereqsProgrammingTests(
    @graphql.Args() args: MhciPrereqsProgrammingTestFindManyArgs
  ): Promise<MhciPrereqsProgrammingTest[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MhciPrereqsProgrammingTest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "read",
    possession: "own",
  })
  async mhciPrereqsProgrammingTest(
    @graphql.Args() args: MhciPrereqsProgrammingTestFindUniqueArgs
  ): Promise<MhciPrereqsProgrammingTest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MhciPrereqsProgrammingTest)
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "create",
    possession: "any",
  })
  async createMhciPrereqsProgrammingTest(
    @graphql.Args() args: CreateMhciPrereqsProgrammingTestArgs
  ): Promise<MhciPrereqsProgrammingTest> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MhciPrereqsProgrammingTest)
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "update",
    possession: "any",
  })
  async updateMhciPrereqsProgrammingTest(
    @graphql.Args() args: UpdateMhciPrereqsProgrammingTestArgs
  ): Promise<MhciPrereqsProgrammingTest | null> {
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

  @graphql.Mutation(() => MhciPrereqsProgrammingTest)
  @nestAccessControl.UseRoles({
    resource: "MhciPrereqsProgrammingTest",
    action: "delete",
    possession: "any",
  })
  async deleteMhciPrereqsProgrammingTest(
    @graphql.Args() args: DeleteMhciPrereqsProgrammingTestArgs
  ): Promise<MhciPrereqsProgrammingTest | null> {
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
