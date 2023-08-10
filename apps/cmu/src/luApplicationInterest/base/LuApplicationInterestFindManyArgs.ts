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
import { LuApplicationInterestWhereInput } from "./LuApplicationInterestWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LuApplicationInterestOrderByInput } from "./LuApplicationInterestOrderByInput";

@ArgsType()
class LuApplicationInterestFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LuApplicationInterestWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LuApplicationInterestWhereInput, { nullable: true })
  @Type(() => LuApplicationInterestWhereInput)
  where?: LuApplicationInterestWhereInput;

  @ApiProperty({
    required: false,
    type: [LuApplicationInterestOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LuApplicationInterestOrderByInput], { nullable: true })
  @Type(() => LuApplicationInterestOrderByInput)
  orderBy?: Array<LuApplicationInterestOrderByInput>;

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

export { LuApplicationInterestFindManyArgs as LuApplicationInterestFindManyArgs };
