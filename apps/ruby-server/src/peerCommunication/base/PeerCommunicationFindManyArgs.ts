/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PeerCommunicationWhereInput } from "./PeerCommunicationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PeerCommunicationOrderByInput } from "./PeerCommunicationOrderByInput";

@ArgsType()
class PeerCommunicationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PeerCommunicationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PeerCommunicationWhereInput, { nullable: true })
  @Type(() => PeerCommunicationWhereInput)
  where?: PeerCommunicationWhereInput;

  @ApiProperty({
    required: false,
    type: [PeerCommunicationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PeerCommunicationOrderByInput], { nullable: true })
  @Type(() => PeerCommunicationOrderByInput)
  orderBy?: Array<PeerCommunicationOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PeerCommunicationFindManyArgs as PeerCommunicationFindManyArgs };
