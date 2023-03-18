import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {iconPicker} from 'sanity-plugin-icon-picker'

export default defineConfig({
  name: 'default',
  title: 'Kreanto',

  projectId: '6wrn8bhl',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), iconPicker()],

  schema: {
    types: schemaTypes,
  },
})
