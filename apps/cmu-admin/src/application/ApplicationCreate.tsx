import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { LuApplicationProgramTitle } from "../luApplicationProgram/LuApplicationProgramTitle";
import { PeriodApplicationTitle } from "../periodApplication/PeriodApplicationTitle";

export const ApplicationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Area1" source="area1" />
        <TextInput label="Area2" source="area2" />
        <TextInput label="Area3" source="area3" />
        <BooleanInput label="Buckleywaive" source="buckleywaive" />
        <NumberInput step={1} label="Cnbc" source="cnbc" />
        <BooleanInput label="Complete" source="complete" />
        <DateTimeInput label="Created Date" source="createdDate" />
        <TextInput label="Cross Dept Progs" source="crossDeptProgs" />
        <TextInput
          label="Cross Dept Progs Other"
          source="crossDeptProgsOther"
        />
        <BooleanInput label="Cups" source="cups" />
        <TextInput label="Cur Enrolled" source="curEnrolled" />
        <BooleanInput label="Hide" source="hide" />
        <TextInput label="Honors" source="honors" />
        <TextInput label="Invitation Email Sent" source="invitationEmailSent" />
        <ReferenceArrayInput
          source="luApplicationPrograms"
          reference="LuApplicationProgram"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LuApplicationProgramTitle} />
        </ReferenceArrayInput>
        <BooleanInput
          label="Masters Review Waiver"
          source="mastersReviewWaiver"
        />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="Notificationsent" source="notificationsent" />
        <TextInput label="Other Inst" source="otherInst" />
        <BooleanInput label="Paid" source="paid" />
        <NumberInput label="Paymentamount" source="paymentamount" />
        <DateTimeInput label="Paymentdate" source="paymentdate" />
        <NumberInput step={1} label="Paymenttype" source="paymenttype" />
        <ReferenceArrayInput
          source="periodApplication"
          reference="PeriodApplication"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PeriodApplicationTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Pier" source="pier" />
        <TextInput label="Portfolio Link" source="portfolioLink" />
        <TextInput label="Portfolio Password" source="portfolioPassword" />
        <BooleanInput label="Portfoliosubmitted" source="portfoliosubmitted" />
        <NumberInput
          step={1}
          label="Previous Coursework"
          source="previousCoursework"
        />
        <TextInput label="Records Permission" source="recordsPermission" />
        <TextInput label="Recruiting Event" source="recruitingEvent" />
        <TextInput label="Referral To Program" source="referralToProgram" />
        <TextInput label="Rejection Sent" source="rejectionSent" />
        <TextInput label="Round2" source="round2" />
        <TextInput label="Round3" source="round3" />
        <TextInput label="Sent To Program" source="sentToProgram" />
        <TextInput label="Statementofpurpose" source="statementofpurpose" />
        <BooleanInput label="Student Commit" source="studentCommit" />
        <BooleanInput label="Submitted" source="submitted" />
        <DateTimeInput label="Submitted Date" source="submittedDate" />
        <NumberInput step={1} label="User Id" source="userId" />
        <TextInput label="Waitlist Sent" source="waitlistSent" />
        <BooleanInput label="Waive" source="waive" />
        <DateTimeInput label="Waivedate" source="waivedate" />
        <NumberInput
          step={1}
          label="Waive Higher Fee"
          source="waiveHigherFee"
        />
        <NumberInput step={1} label="Waive Toefl" source="waiveToefl" />
        <BooleanInput label="Womenfellowship" source="womenfellowship" />
      </SimpleForm>
    </Create>
  );
};
