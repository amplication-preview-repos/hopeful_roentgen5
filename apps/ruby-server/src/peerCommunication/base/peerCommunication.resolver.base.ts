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
import { PeerCommunication } from "./PeerCommunication";
import { PeerCommunicationCountArgs } from "./PeerCommunicationCountArgs";
import { PeerCommunicationFindManyArgs } from "./PeerCommunicationFindManyArgs";
import { PeerCommunicationFindUniqueArgs } from "./PeerCommunicationFindUniqueArgs";
import { CreatePeerCommunicationArgs } from "./CreatePeerCommunicationArgs";
import { UpdatePeerCommunicationArgs } from "./UpdatePeerCommunicationArgs";
import { DeletePeerCommunicationArgs } from "./DeletePeerCommunicationArgs";
import { PeerCommunicationService } from "../peerCommunication.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PeerCommunication)
export class PeerCommunicationResolverBase {
  constructor(
    protected readonly service: PeerCommunicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "read",
    possession: "any",
  })
  async _peerCommunicationsMeta(
    @graphql.Args() args: PeerCommunicationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [PeerCommunication])
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "read",
    possession: "any",
  })
  async peerCommunications(
    @graphql.Args() args: PeerCommunicationFindManyArgs
  ): Promise<PeerCommunication[]> {
    return this.service.peerCommunications(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => PeerCommunication, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "read",
    possession: "own",
  })
  async peerCommunication(
    @graphql.Args() args: PeerCommunicationFindUniqueArgs
  ): Promise<PeerCommunication | null> {
    const result = await this.service.peerCommunication(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PeerCommunication)
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "create",
    possession: "any",
  })
  async createPeerCommunication(
    @graphql.Args() args: CreatePeerCommunicationArgs
  ): Promise<PeerCommunication> {
    return await this.service.createPeerCommunication({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => PeerCommunication)
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "update",
    possession: "any",
  })
  async updatePeerCommunication(
    @graphql.Args() args: UpdatePeerCommunicationArgs
  ): Promise<PeerCommunication | null> {
    try {
      return await this.service.updatePeerCommunication({
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

  @graphql.Mutation(() => PeerCommunication)
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "delete",
    possession: "any",
  })
  async deletePeerCommunication(
    @graphql.Args() args: DeletePeerCommunicationArgs
  ): Promise<PeerCommunication | null> {
    try {
      return await this.service.deletePeerCommunication(args);
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
