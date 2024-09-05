/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  IsDate,
} from "class-validator";
import { EnumIntegrationTestResult } from "./EnumIntegrationTestResult";
import { Type } from "class-transformer";

@InputType()
class IntegrationTestCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  component?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumIntegrationTestResult,
  })
  @IsEnum(EnumIntegrationTestResult)
  @IsOptional()
  @Field(() => EnumIntegrationTestResult, {
    nullable: true,
  })
  result?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  testedAt?: Date | null;
}

export { IntegrationTestCreateInput as IntegrationTestCreateInput };