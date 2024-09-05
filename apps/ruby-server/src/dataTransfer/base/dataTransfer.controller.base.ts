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
import { DataTransferService } from "../dataTransfer.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DataTransferCreateInput } from "./DataTransferCreateInput";
import { DataTransfer } from "./DataTransfer";
import { DataTransferFindManyArgs } from "./DataTransferFindManyArgs";
import { DataTransferWhereUniqueInput } from "./DataTransferWhereUniqueInput";
import { DataTransferUpdateInput } from "./DataTransferUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DataTransferControllerBase {
  constructor(
    protected readonly service: DataTransferService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataTransfer })
  @nestAccessControl.UseRoles({
    resource: "DataTransfer",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createDataTransfer(
    @common.Body() data: DataTransferCreateInput
  ): Promise<DataTransfer> {
    return await this.service.createDataTransfer({
      data: data,
      select: {
        createdAt: true,
        data: true,
        id: true,
        status: true,
        transferTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [DataTransfer] })
  @ApiNestedQuery(DataTransferFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DataTransfer",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dataTransfers(@common.Req() request: Request): Promise<DataTransfer[]> {
    const args = plainToClass(DataTransferFindManyArgs, request.query);
    return this.service.dataTransfers({
      ...args,
      select: {
        createdAt: true,
        data: true,
        id: true,
        status: true,
        transferTime: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DataTransfer",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async dataTransfer(
    @common.Param() params: DataTransferWhereUniqueInput
  ): Promise<DataTransfer | null> {
    const result = await this.service.dataTransfer({
      where: params,
      select: {
        createdAt: true,
        data: true,
        id: true,
        status: true,
        transferTime: true,
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
  @swagger.ApiOkResponse({ type: DataTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DataTransfer",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateDataTransfer(
    @common.Param() params: DataTransferWhereUniqueInput,
    @common.Body() data: DataTransferUpdateInput
  ): Promise<DataTransfer | null> {
    try {
      return await this.service.updateDataTransfer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          data: true,
          id: true,
          status: true,
          transferTime: true,
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
  @swagger.ApiOkResponse({ type: DataTransfer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DataTransfer",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDataTransfer(
    @common.Param() params: DataTransferWhereUniqueInput
  ): Promise<DataTransfer | null> {
    try {
      return await this.service.deleteDataTransfer({
        where: params,
        select: {
          createdAt: true,
          data: true,
          id: true,
          status: true,
          transferTime: true,
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