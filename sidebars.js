module.exports = {
  docs: [{
    type: 'doc',
    id: 'home'
  }, {
    'Getting Started': [
      'prepare-inputs/index',
      'prepare-inputs/upload-spatial-data', {
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
    }],
    'How-to guides': [
      'guides/aggregate-regional-results',
      'guides/account-for-congestion',
      'guides/engage-stakeholders',
      'guides/process-raster-results',
      'guides/compute-freeform'
    ],
    'Background information': [
      'analysis/methodology',
      'learn-more/traffic-stress',
      'learn-more/openstreetmap',
      'learn-more/park-and-ride'
    ],
    'Technical reference': [
      'glossary',
      'learn-more/faq',
      'learn-more/decay-functions',
      'learn-more/generalized-cost',
      'learn-more/developers'
    ]
  }]
}