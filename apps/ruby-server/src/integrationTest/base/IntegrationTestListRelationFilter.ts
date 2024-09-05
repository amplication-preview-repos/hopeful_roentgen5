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
import { IntegrationTestWhereInput } from "./IntegrationTestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IntegrationTestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IntegrationTestWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTestWhereInput)
  @IsOptional()
  @Field(() => IntegrationTestWhereInput, {
    nullable: true,
  })
  every?: IntegrationTestWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationTestWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTestWhereInput)
  @IsOptional()
  @Field(() => IntegrationTestWhereInput, {
    nullable: true,
  })
  some?: IntegrationTestWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegrationTestWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegrationTestWhereInput)
  @IsOptional()
  @Field(() => IntegrationTestWhereInput, {
    nullable: true,
  })
  none?: IntegrationTestWhereInput;
}
export { IntegrationTestListRelationFilter as IntegrationTestListRelationFilter };