
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          title: 'junior software engineer',
          description: 'Looking for a front end programmer skills in HTML5, CSS3, JavaScript, React, Node, AWS',
          pay_min: '$75000/year',
          pay_max: '$120000/year',
          skills: 'HTML5, CSS3, JavaScript, React, Node, AWS'
        },
        {
          title: 'senior software engineer',
          description: 'Looking for a machine learning programmer skills in Python, Java, C++, and AI',
          pay_min: '$150000/year',
          pay_max: '$300000/year',
          skills: 'Python, Java, C++, AI'
        },
      ]);
    });
};
