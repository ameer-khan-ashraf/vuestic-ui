import { ApiDocsBlock } from '@/types/configTypes'
import { PageGenerationHelper } from '@/helpers/DocsHelper'
import VaTabs from 'vuestic-ui/src/components/va-tabs/VaTabs.vue'
import apiOptions from './api-options'

const block = new PageGenerationHelper(__dirname)

const config: ApiDocsBlock[] = [
  block.title('tabs.title'),
  block.paragraph('tabs.summaryText'),

  block.subtitle('all.examples'),

  ...block.exampleBlock(
    'tabs.examples.default.title',
    'tabs.examples.default.text',
    'Default',
  ),
  ...block.exampleBlock(
    'tabs.examples.pagination.title',
    'tabs.examples.pagination.text',
    'Pagination',
  ),
  ...block.exampleBlock(
    'tabs.examples.vertical.title',
    'tabs.examples.vertical.text',
    'Vertical',
  ),
  ...block.exampleBlock(
    'tabs.examples.color.title',
    'tabs.examples.color.text',
    'Color',
  ),
  ...block.exampleBlock(
    'tabs.examples.stateful.title',
    'tabs.examples.stateful.text',
    'Stateful',
  ),

  block.subtitle('all.api'),
  block.api(VaTabs, apiOptions),

  block.subtitle('all.faq'),
  block.headline('tabs.faq.questions[0].question'),
  block.paragraph('tabs.faq.questions[0].answer'),
]

export default config