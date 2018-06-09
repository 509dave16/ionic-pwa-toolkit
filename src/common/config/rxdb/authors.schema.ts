export const AuthorsSchema = {
  title: 'Authors Schema',
  version: 0,
  description: "Describes an author",
  type: "object",
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    name: {
      type: "string",
    }
  },
  required: ['name']
};
