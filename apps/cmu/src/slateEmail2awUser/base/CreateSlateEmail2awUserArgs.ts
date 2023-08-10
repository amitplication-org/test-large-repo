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
import { SlateEmail2awUserCreateInput } from "./SlateEmail2awUserCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSlateEmail2awUserArgs {
  @ApiProperty({
    required: true,
    type: () => SlateEmail2awUserCreateInput,
  })
  @ValidateNested()
  @Type(() => SlateEmail2awUserCreateInput)
  @Field(() => SlateEmail2awUserCreateInput, { nullable: false })
  data!: SlateEmail2awUserCreateInput;
}

export { CreateSlateEmail2awUserArgs as CreateSlateEmail2awUserArgs };
