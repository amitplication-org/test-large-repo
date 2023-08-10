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
import { DietrichSharingWhereUniqueInput } from "./DietrichSharingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DietrichSharingUpdateInput } from "./DietrichSharingUpdateInput";

@ArgsType()
class UpdateDietrichSharingArgs {
  @ApiProperty({
    required: true,
    type: () => DietrichSharingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DietrichSharingWhereUniqueInput)
  @Field(() => DietrichSharingWhereUniqueInput, { nullable: false })
  where!: DietrichSharingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DietrichSharingUpdateInput,
  })
  @ValidateNested()
  @Type(() => DietrichSharingUpdateInput)
  @Field(() => DietrichSharingUpdateInput, { nullable: false })
  data!: DietrichSharingUpdateInput;
}

export { UpdateDietrichSharingArgs as UpdateDietrichSharingArgs };
