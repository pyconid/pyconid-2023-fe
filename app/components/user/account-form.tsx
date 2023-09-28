import { useId } from "react"
import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react"
import { conform, useFieldset, useForm } from "@conform-to/react"
import { getFieldsetConstraint, parse } from "@conform-to/zod"
import type { action, loader } from "~/routes/_user.account"
import { userUpdateSchema } from "~/schemas"

import { transformCheckboxFields } from "~/libs/transform-checkbox"
import { useCountryStateCity } from "~/hooks/useCountryStateCity"
import { useUpdateEffect } from "~/hooks/useUpdateEffect"
import { CheckboxInput, SelectInput, TextInput } from "~/components/shared"
import { Button, DatePicker, Textarea } from "~/components/ui"
import { FormField, FormFieldSet, FormLabel } from "~/components/ui/form"
import { genderData } from "~/data/gender"
import { lookingForData } from "~/data/looking-for"
import { tshirtSizeData } from "~/data/tshirt-size"

import { useToast } from "../ui/use-toast"

export const AccountForm = () => {
  const formId = useId()
  const { industryCategories, jobCategories, participantTypes, userProfile } =
    useLoaderData<typeof loader>()
  const lastSubmission = useActionData<typeof action>()
  const navigation = useNavigation()
  const { toast } = useToast()

  const isSubmitting = navigation.state === "submitting"

  const [
    form,
    {
      id,
      firstName,
      lastName,
      email,
      organisation,
      industryCategoryId,
      jobCategoryId,
      jobTitle,
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
      compliance,
      publicFields,
    },
  ] = useForm({
    id: formId,
    lastSubmission,
    constraint: getFieldsetConstraint(userUpdateSchema),
    shouldRevalidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: userUpdateSchema })
    },
    defaultValue: {
      ...userProfile,
      compliance: transformCheckboxFields(userProfile.compliance),
      publicFields: transformCheckboxFields(userProfile.PublicFields),
    },
  })

  const {
    company: isCompanyPublic,
    gender: isGenderPublic,
    phone: isPhonePublic,
    address: isAddressPublic,
    socials: isSocialsPublic,
  } = useFieldset(form.ref, publicFields)

  const { codeOfConduct, termsOfService } = useFieldset(form.ref, compliance)

  const { countries, states, cities, setCiso, setSiso } = useCountryStateCity(
    country.defaultValue,
    state.defaultValue,
  )

  useUpdateEffect(() => {
    if (navigation.state === "idle") {
      toast({ title: "Profile updated successfully!", duration: 2000 })
    }
  }, [navigation.state])

  return (
    <Form method="POST" {...form.props}>
      <input type="hidden" {...conform.input(id)} />
      <div className="mx-auto mb-8 mt-16 w-full max-w-4xl px-6">
        <FormFieldSet title="Profile" disabled={isSubmitting}>
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
            label="Email *"
            placeholder="Email"
            type="email"
            disabled
          />
          <div className="space-y-5 rounded-lg bg-primary/5 px-5 py-4">
            <TextInput
              field={organisation}
              label="Company"
              placeholder="Company"
            />
            <SelectInput
              field={industryCategoryId}
              label="Industry Categories"
              placeholder="Select Industry Categories"
            >
              {industryCategories.map(({ name, id }) => (
                <SelectInput.Option key={id} value={id}>
                  {name}
                </SelectInput.Option>
              ))}
            </SelectInput>

            <CheckboxInput field={isCompanyPublic}>
              Share my company to public
            </CheckboxInput>
          </div>
          <TextInput
            field={jobTitle}
            label="Job Title"
            placeholder="e.g. Web Developer"
          />
          <SelectInput
            field={jobCategoryId}
            label="Job Categories"
            placeholder="Choose Job Categoires"
          >
            {jobCategories.map(({ name, id }) => (
              <SelectInput.Option key={id} value={id}>
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
            <DatePicker field={dateOfBirth} />
          </FormField>
          <TextInput
            field={phone}
            label="Mobile Number"
            placeholder="e.g. +628222"
          />
          <CheckboxInput field={isPhonePublic}>
            Share my phone number to public
          </CheckboxInput>
          <FormField>
            <FormLabel htmlFor={bio.id}>About</FormLabel>
            <Textarea {...conform.input(bio)} placeholder="Hi, I am ..." />
          </FormField>
          <TextInput
            field={interest}
            label="Interests"
            placeholder="Enter you interests"
            description="Write your interest and separate it by comma (e.g. Data, NLP)"
          />
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
        <FormFieldSet title="Address" disabled={isSubmitting}>
          <div className="space-y-5 rounded-lg bg-primary/5 px-5 py-4">
            <SelectInput
              field={country}
              label="Country"
              placeholder="Choose country"
              onValueChange={(value) => setCiso(value)}
            >
              {countries?.map(({ name, iso2 }) => (
                <SelectInput.Option key={iso2} value={iso2}>
                  {name}
                </SelectInput.Option>
              ))}
            </SelectInput>
            <div className="flex flex-col items-center gap-4 space-y-10 lg:flex-row lg:space-y-0">
              <SelectInput
                field={state}
                label="State"
                placeholder="Choose state"
                onValueChange={(value) => setSiso(value)}
              >
                {states?.map(({ name, iso2 }) => (
                  <SelectInput.Option key={iso2} value={iso2}>
                    {name}
                  </SelectInput.Option>
                ))}
              </SelectInput>
              <SelectInput field={city} label="City" placeholder="Choose city">
                {cities?.map(({ id, name }) => (
                  <SelectInput.Option key={id} value={name}>
                    {name}
                  </SelectInput.Option>
                ))}
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
          </div>
        </FormFieldSet>
        <FormFieldSet title="Social Media" disabled={isSubmitting}>
          <div className="space-y-5 rounded-lg bg-primary/5 px-5 py-4">
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
              label="Facebook Username"
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
              Share my social media to the public
            </CheckboxInput>
          </div>
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
          <CheckboxInput
            label="Code of Conduct"
            field={codeOfConduct}
            disabled={isSubmitting}
          >
            Lorem ipsum dolor sit amet consectetur. Mi in tortor gravida tortor
            mi id ut. Egestas lobortis neque elit gravida ac nec pellentesque
            pellentesque.{" "}
            <span className="font-bold underline">
              <Link to="/coc">Click here to read the full version</Link>
            </span>
          </CheckboxInput>
          <CheckboxInput
            label="Terms of Service Knowledge"
            field={termsOfService}
            disabled={isSubmitting}
          >
            Lorem ipsum dolor sit amet consectetur. Mi in tortor gravida tortor
            mi id ut. Egestas lobortis neque elit gravida ac nec pellentesque
            pellentesque.{" "}
            <span className="font-bold underline">
              <Link to="/coc">Click here to read the full version</Link>
            </span>
          </CheckboxInput>
        </FormFieldSet>
      </div>
      <div className="sticky bottom-10 mx-auto mb-10 mt-8 flex w-full max-w-5xl items-center justify-between gap-4 rounded-full bg-primary-100 px-10 py-5">
        <p>* Mandatory</p>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </Form>
  )
}
