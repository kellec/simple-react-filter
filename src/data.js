module.exports = {
  filters: [
    {
      filterName: 'Division',
      filterOptions: [
        'Atlantic',
        'Central',
        'Metropolitan',
        'Pacific'
      ]
    },
    {
      filterName: 'Conference',
      filterOptions: [
        'East',
        'West'
      ]
    }
  ],
  content: [
    { slug: 'anaheim', name: 'Anaheim Ducks', division: 'Pacific', conference: 'West' },
    { slug: 'chicago', name: 'Chicago Blackhawks', division: 'Central', conference: 'West' },
    { slug: 'toronto', name: 'Toronto Maple Leafs', division: 'Atlantic', conference: 'East' },
    { slug: 'pittsburg', name: 'Pittsburg Penguins', division: 'Metropolitan', conference: 'East' }
  ]
};