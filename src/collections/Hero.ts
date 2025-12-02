import type { CollectionConfig } from 'payload'

export const Hero: CollectionConfig = {
  slug: 'hero',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Titre principal',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      label: 'Sous-titre',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Image de fond',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Statistiques',
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          label: 'Nombre',
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Libellé',
        },
      ],
    },
    {
      name: 'ctaButtons',
      type: 'array',
      label: "Boutons d'action",
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Texte',
        },
        {
          name: 'href',
          type: 'text',
          required: true,
          label: 'Lien',
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Primaire', value: 'primary' },
            { label: 'Secondaire', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'primary',
          label: 'Variante',
        },
      ],
    },
  ],
}
