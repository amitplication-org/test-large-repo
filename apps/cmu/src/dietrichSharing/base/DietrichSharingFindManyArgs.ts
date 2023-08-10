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
import { DietrichSharingWhereInput } from "./DietrichSharingWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DietrichSharingOrderByInput } from "./DietrichSharingOrderByInput";

@ArgsType()
class DietrichSharingFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DietrichSharingWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DietrichSharingWhereInput, { nullable: true })
  @Type(() => DietrichSharingWhereInput)
  where?: DietrichSharingWhereInput;

  @ApiProperty({
    required: false,
    type: [DietrichSharingOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DietrichSharingOrderByInput], { nullable: true })
  @Type(() => DietrichSharingOrderByInput)
  orderBy?: Array<DietrichSharingOrderByInput>;

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

export { DietrichSharingFindManyArgs as DietrichSharingFindManyArgs };
