import { useId } from "react"
import { Form, Link, useActionData, useLoaderData } from "@remix-run/react"
import { conform, useFieldset, useForm } from "@conform-to/react"
import { getFieldsetConstraint } from "@conform-to/zod"
import type { action, loader } from "~/routes/_user.account"
import { userUpdateSchema } from "~/schemas"

import { CheckboxInput, SelectInput, TextInput } from "~/components/shared"
import { DatePicker, Textarea } from "~/components/ui"
import { FormField, FormFieldSet, FormLabel } from "~/components/ui/form"
import { genderData } from "~/data/gender"
import { lookingForData } from "~/data/looking-for"
import { tshirtSizeData } from "~/data/tshirt-size"

export const AccountForm = () => {
  const id = useId()
  const { industryCategories, jobCategories, participantTypes } =
    useLoaderData<typeof loader>()
  const lastSubmission = useActionData<typeof action>()

  const [
    form,
    {
      firstName,
      lastName,
      email,
      company,
      industryCategorySymbol,
      jobCategorySymbol,
      tShirtSize,
      gender,
      dateOfBirth,
      phone,
      bio,
      interest,
      lookingFor,
      country,
      state,
      city,
      address,
      website,
      github,
      facebook,
      linkedin,
      twitter,
      instagram,
      participantTypeSymbol,
      publicFields,
      codeOfConduct,
      termsOfService,
    },
  ] = useForm({
    id,
    lastSubmission,
    constraint: getFieldsetConstraint(userUpdateSchema),
  })

  const {
    company: isCompanyPublic,
    gender: isGenderPublic,
    phone: isPhonePublic,
    address: isAddressPublic,
    socials: isSocialsPublic,
  } = useFieldset(form.ref, publicFields)

  return (
    <Form method="POST" {...form.props}>
      <FormFieldSet title="Profile">
        <div className="flex gap-6">
          <TextInput
            field={firstName}
            label="First Name"
            placeholder="First Name"
          />
          <TextInput
            field={lastName}
            label="Last Name"
            placeholder="Last Name"
          />
        </div>
        <TextInput
          field={email}
          label="Email"
          placeholder="Email"
          type="email"
        />
        <TextInput field={company} label="Company" placeholder="Company" />
        <SelectInput
          field={industryCategorySymbol}
          label="Industry Categories"
          placeholder="Select Industry Categories"
        >
          {industryCategories.map(({ name, symbol }) => (
            <SelectInput.Option key={symbol} value={symbol}>
              {name}
            </SelectInput.Option>
          ))}
        </SelectInput>
        <CheckboxInput field={isCompanyPublic}>
          Share to public my company
        </CheckboxInput>
        <SelectInput
          field={jobCategorySymbol}
          label="Job Categories"
          placeholder="Choose Job Categoires"
        >
          {jobCategories.map(({ name, symbol }) => (
            <SelectInput.Option key={symbol} value={symbol}>
              {name}
            </SelectInput.Option>
          ))}
        </SelectInput>
        <SelectInput
          field={tShirtSize}
          label="T-Shirt Size"
          placeholder="Choose T-Shirt Size"
        >
          {tshirtSizeData.map(({ name, symbol }) => (
            <SelectInput.Option key={symbol} value={symbol}>
              {name}
            </SelectInput.Option>
          ))}
        </SelectInput>
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          <SelectInput
            field={gender}
            label="Gender"
            placeholder="Choose Gender"
          >
            {genderData.map(({ name, symbol }) => (
              <SelectInput.Option key={symbol} value={symbol}>
                {name}
              </SelectInput.Option>
            ))}
          </SelectInput>
          <CheckboxInput
            className="mt-7 flex w-48 flex-none items-center space-y-0"
            field={isGenderPublic}
          >
            Share to public
          </CheckboxInput>
        </div>
        <FormField>
          <FormLabel htmlFor={dateOfBirth.id}>Date of Birth</FormLabel>
          <DatePicker {...conform.input(dateOfBirth)} />
        </FormField>
        <TextInput
          field={phone}
          label="Mobile Number"
          placeholder="e.g. +628222"
        />
        <CheckboxInput field={isPhonePublic}>
          Share to public my company
        </CheckboxInput>
        <FormField>
          <FormLabel htmlFor={bio.id}>About</FormLabel>
          <Textarea {...conform.input(bio)} placeholder="Hi, I am ..." />
        </FormField>
        <TextInput field={interest} label="Interest" placeholder="Interest" />
        <SelectInput
          field={lookingFor}
          label="Looking for"
          placeholder="Choose what you want"
        >
          {lookingForData.map(({ name, symbol }) => (
            <SelectInput.Option key={symbol} value={symbol}>
              {name}
            </SelectInput.Option>
          ))}
        </SelectInput>
      </FormFieldSet>
      <FormFieldSet title="Address">
        <SelectInput
          field={country}
          label="Country"
          placeholder="Choose country"
        >
          WIP
        </SelectInput>

        <div className="flex flex-col items-center gap-4 space-y-10 lg:flex-row lg:space-y-0">
          <SelectInput field={state} label="State" placeholder="Choose state">
            WIP
          </SelectInput>
          <SelectInput field={city} label="State" placeholder="Choose state">
            WIP
          </SelectInput>
        </div>
        <TextInput
          field={address}
          label="Street Address"
          placeholder="Enter your street number"
        />
        <CheckboxInput field={isAddressPublic}>
          Share to public my address
        </CheckboxInput>
      </FormFieldSet>
      <FormFieldSet title="Social Media">
        <TextInput
          field={website}
          label="Website / Portofolio"
          placeholder="Share your website/portflio link"
        />
        <TextInput
          field={github}
          label="Github Username"
          placeholder="Share your Github username"
        />
        <TextInput
          field={facebook}
          label="Github Username"
          placeholder="Share your Facebook username"
        />
        <TextInput
          field={linkedin}
          label="LinkedIn Username"
          placeholder="Share your LinkedIn username"
        />
        <TextInput
          field={twitter}
          label="Twitter Username"
          placeholder="Share your Twitter username"
        />
        <TextInput
          field={instagram}
          label="Instagram Username"
          placeholder="Share your Twitter username"
        />
        <CheckboxInput field={isSocialsPublic}>
          Share my social media to public
        </CheckboxInput>
      </FormFieldSet>
      <FormFieldSet title="Participant">
        <SelectInput
          field={participantTypeSymbol}
          label="Participant Type"
          placeholder="Non Participant"
          disabled
        >
          {participantTypes.map(({ name, symbol }) => (
            <SelectInput.Option key={symbol} value={symbol}>
              {name}
            </SelectInput.Option>
          ))}
        </SelectInput>
        <CheckboxInput label="Code of Conduct" field={codeOfConduct}>
          Lorem ipsum dolor sit amet consectetur. Mi in tortor gravida tortor mi
          id ut. Egestas lobortis neque elit gravida ac nec pellentesque
          pellentesque.{" "}
          <span className="font-bold underline">
            <Link to="/coc">Click here to read the full version</Link>
          </span>
        </CheckboxInput>
        <CheckboxInput
          label="Terms of Service Knowledge"
          field={termsOfService}
        >
          Lorem ipsum dolor sit amet consectetur. Mi in tortor gravida tortor mi
          id ut. Egestas lobortis neque elit gravida ac nec pellentesque
          pellentesque.{" "}
          <span className="font-bold underline">
            <Link to="/coc">Click here to read the full version</Link>
          </span>
        </CheckboxInput>
      </FormFieldSet>
    </Form>
  )
}
