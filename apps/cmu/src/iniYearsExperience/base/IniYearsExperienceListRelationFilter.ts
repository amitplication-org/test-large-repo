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
import { IniYearsExperienceWhereInput } from "./IniYearsExperienceWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IniYearsExperienceListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IniYearsExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => IniYearsExperienceWhereInput)
  @IsOptional()
  @Field(() => IniYearsExperienceWhereInput, {
    nullable: true,
  })
  every?: IniYearsExperienceWhereInput;

  @ApiProperty({
    required: false,
    type: () => IniYearsExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => IniYearsExperienceWhereInput)
  @IsOptional()
  @Field(() => IniYearsExperienceWhereInput, {
    nullable: true,
  })
  some?: IniYearsExperienceWhereInput;

  @ApiProperty({
    required: false,
    type: () => IniYearsExperienceWhereInput,
  })
  @ValidateNested()
  @Type(() => IniYearsExperienceWhereInput)
  @IsOptional()
  @Field(() => IniYearsExperienceWhereInput, {
    nullable: true,
  })
  none?: IniYearsExperienceWhereInput;
}
export { IniYearsExperienceListRelationFilter as IniYearsExperienceListRelationFilter };
