import {IoPricetags} from 'react-icons/io'

export default {
  name: 'tags',
  title: 'Tags',
  type: 'document',
  icon: IoPricetags,
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
