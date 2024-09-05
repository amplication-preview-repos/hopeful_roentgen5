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
import { DataTransferWhereInput } from "./DataTransferWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DataTransferListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DataTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => DataTransferWhereInput)
  @IsOptional()
  @Field(() => DataTransferWhereInput, {
    nullable: true,
  })
  every?: DataTransferWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => DataTransferWhereInput)
  @IsOptional()
  @Field(() => DataTransferWhereInput, {
    nullable: true,
  })
  some?: DataTransferWhereInput;

  @ApiProperty({
    required: false,
    type: () => DataTransferWhereInput,
  })
  @ValidateNested()
  @Type(() => DataTransferWhereInput)
  @IsOptional()
  @Field(() => DataTransferWhereInput, {
    nullable: true,
  })
  none?: DataTransferWhereInput;
}
export { DataTransferListRelationFilter as DataTransferListRelationFilter };
