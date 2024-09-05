/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { IntegrationTest } from "./IntegrationTest";
import { IntegrationTestCountArgs } from "./IntegrationTestCountArgs";
import { IntegrationTestFindManyArgs } from "./IntegrationTestFindManyArgs";
import { IntegrationTestFindUniqueArgs } from "./IntegrationTestFindUniqueArgs";
import { CreateIntegrationTestArgs } from "./CreateIntegrationTestArgs";
import { UpdateIntegrationTestArgs } from "./UpdateIntegrationTestArgs";
import { DeleteIntegrationTestArgs } from "./DeleteIntegrationTestArgs";
import { IntegrationTestService } from "../integrationTest.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IntegrationTest)
export class IntegrationTestResolverBase {
  constructor(
    protected readonly service: IntegrationTestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "read",
    possession: "any",
  })
  async _integrationTestsMeta(
    @graphql.Args() args: IntegrationTestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [IntegrationTest])
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "read",
    possession: "any",
  })
  async integrationTests(
    @graphql.Args() args: IntegrationTestFindManyArgs
  ): Promise<IntegrationTest[]> {
    return this.service.integrationTests(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => IntegrationTest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "read",
    possession: "own",
  })
  async integrationTest(
    @graphql.Args() args: IntegrationTestFindUniqueArgs
  ): Promise<IntegrationTest | null> {
    const result = await this.service.integrationTest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IntegrationTest)
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "create",
    possession: "any",
  })
  async createIntegrationTest(
    @graphql.Args() args: CreateIntegrationTestArgs
  ): Promise<IntegrationTest> {
    return await this.service.createIntegrationTest({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => IntegrationTest)
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "update",
    possession: "any",
  })
  async updateIntegrationTest(
    @graphql.Args() args: UpdateIntegrationTestArgs
  ): Promise<IntegrationTest | null> {
    try {
      return await this.service.updateIntegrationTest({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => IntegrationTest)
  @nestAccessControl.UseRoles({
    resource: "IntegrationTest",
    action: "delete",
    possession: "any",
  })
  async deleteIntegrationTest(
    @graphql.Args() args: DeleteIntegrationTestArgs
  ): Promise<IntegrationTest | null> {
    try {
      return await this.service.deleteIntegrationTest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
