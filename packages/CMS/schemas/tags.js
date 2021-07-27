import {AiTwotoneTag} from 'react-icons/ai'

export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon: AiTwotoneTag,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
