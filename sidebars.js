module.exports = {
  docs: [{
    type: 'doc',
    id: 'home'
  }, {
    type: 'category',
    label: 'Network setup',
    collapsed: false,
    items: ['prepare-inputs/index', 'prepare-inputs/upload-opportunity-data']
  }, {
    type: 'category',
    label: 'Network editing',
    collapsed: false,
    items: [
      'edit-scenario/index',
      'edit-scenario/example',
      'edit-scenario/usage',
      'edit-scenario/modifications',
      'edit-scenario/timetable',
      'edit-scenario/phasing'
    ]
  }, {
    type: 'category',
    label: 'Analyze Accessibility',
    collapsed: false,
    items: [
      'analysis/index',
      'analysis/configuration',
      'analysis/regional'
    ]
  }, {
    type: 'category',
    label: 'Guides',
    collapsed: true,
    items: [
      'guides/aggregate-regional-results',
      'guides/account-for-congestion'
    ]
  }, {
    type: 'category',
    label: 'Learn more',
    collapsed: true,
    items: [
      'learn-more/developers',
      'learn-more/faq',
      'learn-more/traffic-stress',
      'learn-more/openstreetmap',
      'learn-more/park-and-ride',
      'learn-more/decay-functions',
      'learn-more/generalized-cost',
      'analysis/methodology',
      'glossary'
    ]
  }]
}