import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { APPLICATION_TITLE_FIELD } from "./ApplicationTitle";
import { PROGRAMMODEL_TITLE_FIELD } from "../programModel/ProgramModelTitle";
import { PERIOD_TITLE_FIELD } from "../period/PeriodTitle";

export const ApplicationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Area1" source="area1" />
        <TextField label="Area2" source="area2" />
        <TextField label="Area3" source="area3" />
        <BooleanField label="Buckleywaive" source="buckleywaive" />
        <TextField label="Cnbc" source="cnbc" />
        <BooleanField label="Complete" source="complete" />
        <TextField label="Created Date" source="createdDate" />
        <TextField label="Cross Dept Progs" source="crossDeptProgs" />
        <TextField
          label="Cross Dept Progs Other"
          source="crossDeptProgsOther"
        />
        <BooleanField label="Cups" source="cups" />
        <TextField label="Cur Enrolled" source="curEnrolled" />
        <BooleanField label="Hide" source="hide" />
        <TextField label="Honors" source="honors" />
        <TextField label="Id" source="id" />
        <TextField label="Invitation Email Sent" source="invitationEmailSent" />
        <BooleanField
          label="Masters Review Waiver"
          source="mastersReviewWaiver"
        />
        <TextField label="Name" source="name" />
        <TextField label="Notificationsent" source="notificationsent" />
        <TextField label="Other Inst" source="otherInst" />
        <BooleanField label="Paid" source="paid" />
        <TextField label="Paymentamount" source="paymentamount" />
        <TextField label="Paymentdate" source="paymentdate" />
        <TextField label="Paymenttype" source="paymenttype" />
        <BooleanField label="Pier" source="pier" />
        <TextField label="Portfolio Link" source="portfolioLink" />
        <TextField label="Portfolio Password" source="portfolioPassword" />
        <BooleanField label="Portfoliosubmitted" source="portfoliosubmitted" />
        <TextField label="Previous Coursework" source="previousCoursework" />
        <TextField label="Records Permission" source="recordsPermission" />
        <TextField label="Recruiting Event" source="recruitingEvent" />
        <TextField label="Referral To Program" source="referralToProgram" />
        <TextField label="Rejection Sent" source="rejectionSent" />
        <TextField label="Round2" source="round2" />
        <TextField label="Round3" source="round3" />
        <TextField label="Sent To Program" source="sentToProgram" />
        <TextField label="Statementofpurpose" source="statementofpurpose" />
        <BooleanField label="Student Commit" source="studentCommit" />
        <BooleanField label="Submitted" source="submitted" />
        <TextField label="Submitted Date" source="submittedDate" />
        <TextField label="User Id" source="userId" />
        <TextField label="Waitlist Sent" source="waitlistSent" />
        <BooleanField label="Waive" source="waive" />
        <TextField label="Waivedate" source="waivedate" />
        <TextField label="Waive Higher Fee" source="waiveHigherFee" />
        <TextField label="Waive Toefl" source="waiveToefl" />
        <BooleanField label="Womenfellowship" source="womenfellowship" />
        <ReferenceManyField
          reference="LuApplicationProgram"
          target="application_id"
          label="LuApplicationPrograms"
        >
          <Datagrid rowClick="show">
            <TextField label="Admission Status" source="admissionStatus" />
            <TextField label="Admit" source="admit" />
            <TextField label="Admit Comments" source="admitComments" />
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Choice" source="choice" />
            <TextField label="Decision" source="decision" />
            <TextField label="Faccontact" source="faccontact" />
            <TextField label="Id" source="id" />
            <TextField label="Ltichoice" source="ltichoice" />
            <ReferenceField
              label="Programs"
              source="programmodel.id"
              reference="ProgramModel"
            >
              <TextField source={PROGRAMMODEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Round2" source="round2" />
            <TextField label="Scholarship Amt" source="scholarshipAmt" />
            <TextField
              label="Scholarship Comments"
              source="scholarshipComments"
            />
            <TextField label="Stucontact" source="stucontact" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PeriodApplication"
          target="application_id"
          label="PeriodApplications"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Application"
              source="application.id"
              reference="Application"
            >
              <TextField source={APPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Id" source="id" />
            <ReferenceField
              label="Period"
              source="period.id"
              reference="Period"
            >
              <TextField source={PERIOD_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
