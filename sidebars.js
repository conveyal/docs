module.exports = {
  docs: [{
    type: 'doc',
    id: 'home'
  }, {
    type: 'category',
    label: 'Getting Started',
    link: {
      type: 'generated-index',
      title: 'Getting started with Conveyal'
    },
    items: [{
      type: 'category',
      label: 'Prepare data',
      link: {
        type: 'generated-index',
        title: 'Preparing data'
      },
      collapsed: false,
      items: [
        'prepare-inputs/index',
        'prepare-inputs/upload-spatial-data',
        'prepare-data/index',
        'prepare-data/derivations'
      ]
    }, {
      type: 'category',
      label: 'Network editing',
      link: {
        type: 'generated-index',
        title: 'Network editing'
      },
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
      link: {
        type: 'generated-index',
        title: 'Analyze Accessibility'
      },
      collapsed: false,
      items: [
        'analysis/index',
        'analysis/configuration',
        'analysis/regional'
      ]
    }]
  }, {
    type: 'category',
    label: 'How-to guides',
    link: {
      type: 'generated-index',
      title: 'How-to guides'
    },
    items: [
      'guides/aggregate-regional-results',
      'guides/account-for-congestion',
      'guides/engage-stakeholders',
      'guides/process-raster-results',
      'guides/compute-freeform'
    ]
  }, {
    type: 'category',
    label: 'Background information',
    link: {
      type: 'generated-index',
      title: 'Background information'
    },
    items: [
      'analysis/methodology',
      'learn-more/traffic-stress',
      'learn-more/openstreetmap',
      'learn-more/park-and-ride'
    ]
  }, {
    type: 'category',
    label: 'Technical reference',
    link: {
      type: 'generated-index',
      title: 'Technical reference'
    },
    items: [
      'glossary',
      'learn-more/faq',
      'learn-more/decay-functions',
      'learn-more/generalized-cost',
      'learn-more/developers',
      'troubleshooting'
    ]
  }]
}