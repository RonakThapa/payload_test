import type { Block, Field } from 'payload'

const columnFields: Field[] = [
  {
    name: 'richText',
    type: 'richText',
    label: false,
  },
  {
    name: 'enableLink',
    type: 'checkbox',
  },
]

export const PostBlock: Block = {
  slug: 'post block',
  interfaceName: 'PostBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: columnFields,
    },
  ],
}
