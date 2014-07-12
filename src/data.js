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
    { slug: 'rangers',    name: 'New York Rangers',      division: 'Metropolitan', conference: 'East' },
    { slug: 'bruins',     name: 'Boston Bruins',         division: 'Atlantic',     conference: 'East' },
    { slug: 'canadiens',  name: 'Montreal Canadiens',    division: 'Atlantic',     conference: 'East' },
    { slug: 'predators',  name: 'Nashville Predators',   division: 'Central',      conference: 'West' },
    { slug: 'canucks',    name: 'Vancouver Canucks',     division: 'Pacific',      conference: 'West' },
    { slug: 'wild',       name: 'Minnesota Wild',        division: 'Central',      conference: 'West' },
    { slug: 'penguins',   name: 'Pittsburgh Penguins',   division: 'Metropolitan', conference: 'East' },
    { slug: 'sabres',     name: 'Buffalo Sabres',        division: 'Atlantic',     conference: 'East' },
    { slug: 'capitals',   name: 'Washington Capitals',   division: 'Metropolitan', conference: 'East' },
    { slug: 'blues',      name: 'St. Louis Blues',       division: 'Central',      conference: 'West' },
    { slug: 'flames',     name: 'Calgary Flames',        division: 'Pacific',      conference: 'West' },
    { slug: 'kings',      name: 'Los Angeles Kings',     division: 'Pacific',      conference: 'West' },
    { slug: 'islanders',  name: 'New York Islanders',    division: 'Metropolitan', conference: 'East' },
    { slug: 'senators',   name: 'Ottawa Senators',       division: 'Atlantic',     conference: 'East' },
    { slug: 'lightning',  name: 'Tampa Bay Lightning',   division: 'Atlantic',     conference: 'East' },
    { slug: 'redwings',   name: 'Detroit Red Wings',     division: 'Atlantic',     conference: 'East' },
    { slug: 'ducks',      name: 'Anaheim Ducks',         division: 'Pacific',      conference: 'West' },
    { slug: 'jackets',    name: 'Columbus Blue Jackets', division: 'Metropolitan', conference: 'East' },
    { slug: 'devils',     name: 'New Jersey Devils',     division: 'Metropolitan', conference: 'East' },
    { slug: 'leafs',      name: 'Toronto Maple Leafs',   division: 'Atlantic',     conference: 'East' },
    { slug: 'hurricanes', name: 'Carolina Hurricanes',   division: 'Metropolitan', conference: 'East' },
    { slug: 'stars',      name: 'Dallas Stars',          division: 'Central',      conference: 'West' },
    { slug: 'avalanche',  name: 'Colorado Avalanche',    division: 'Central',      conference: 'West' },
    { slug: 'sharks',     name: 'San Jose Sharks',       division: 'Pacific',      conference: 'West' },
    { slug: 'flyers',     name: 'Philadelphia Flyers',   division: 'Metropolitan', conference: 'East' },
    { slug: 'panthers',   name: 'Florida Panthers',      division: 'Atlantic',     conference: 'East' },
    { slug: 'jets',       name: 'Winnipeg Jets',         division: 'Central',      conference: 'West' },
    { slug: 'blackhawks', name: 'Chicago Blackhawks',    division: 'Central',      conference: 'West' },
    { slug: 'oilers',     name: 'Edmonton Oilers',       division: 'Pacific',      conference: 'West' },
    { slug: 'coyotes',    name: 'Arizona Coyotes',       division: 'Pacific',      conference: 'West' }
  ]
};