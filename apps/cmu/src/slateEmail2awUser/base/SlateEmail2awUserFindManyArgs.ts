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
import { SlateEmail2awUserWhereInput } from "./SlateEmail2awUserWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SlateEmail2awUserOrderByInput } from "./SlateEmail2awUserOrderByInput";

@ArgsType()
class SlateEmail2awUserFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SlateEmail2awUserWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SlateEmail2awUserWhereInput, { nullable: true })
  @Type(() => SlateEmail2awUserWhereInput)
  where?: SlateEmail2awUserWhereInput;

  @ApiProperty({
    required: false,
    type: [SlateEmail2awUserOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SlateEmail2awUserOrderByInput], { nullable: true })
  @Type(() => SlateEmail2awUserOrderByInput)
  orderBy?: Array<SlateEmail2awUserOrderByInput>;

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

export { SlateEmail2awUserFindManyArgs as SlateEmail2awUserFindManyArgs };
