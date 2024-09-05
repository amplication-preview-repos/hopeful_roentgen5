/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PeerCommunicationService } from "../peerCommunication.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PeerCommunicationCreateInput } from "./PeerCommunicationCreateInput";
import { PeerCommunication } from "./PeerCommunication";
import { PeerCommunicationFindManyArgs } from "./PeerCommunicationFindManyArgs";
import { PeerCommunicationWhereUniqueInput } from "./PeerCommunicationWhereUniqueInput";
import { PeerCommunicationUpdateInput } from "./PeerCommunicationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PeerCommunicationControllerBase {
  constructor(
    protected readonly service: PeerCommunicationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PeerCommunication })
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPeerCommunication(
    @common.Body() data: PeerCommunicationCreateInput
  ): Promise<PeerCommunication> {
    return await this.service.createPeerCommunication({
      data: data,
      select: {
        createdAt: true,
        id: true,
        message: true,
        receiverId: true,
        senderId: true,
        sentAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PeerCommunication] })
  @ApiNestedQuery(PeerCommunicationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async peerCommunications(
    @common.Req() request: Request
  ): Promise<PeerCommunication[]> {
    const args = plainToClass(PeerCommunicationFindManyArgs, request.query);
    return this.service.peerCommunications({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        receiverId: true,
        senderId: true,
        sentAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PeerCommunication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async peerCommunication(
    @common.Param() params: PeerCommunicationWhereUniqueInput
  ): Promise<PeerCommunication | null> {
    const result = await this.service.peerCommunication({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        receiverId: true,
        senderId: true,
        sentAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PeerCommunication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePeerCommunication(
    @common.Param() params: PeerCommunicationWhereUniqueInput,
    @common.Body() data: PeerCommunicationUpdateInput
  ): Promise<PeerCommunication | null> {
    try {
      return await this.service.updatePeerCommunication({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          message: true,
          receiverId: true,
          senderId: true,
          sentAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: PeerCommunication })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PeerCommunication",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePeerCommunication(
    @common.Param() params: PeerCommunicationWhereUniqueInput
  ): Promise<PeerCommunication | null> {
    try {
      return await this.service.deletePeerCommunication({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          receiverId: true,
          senderId: true,
          sentAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}