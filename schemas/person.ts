import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'person',
  title: 'Person',
  icon: UserIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
