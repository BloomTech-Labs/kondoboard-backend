exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex('jobs').del();
  // Inserts seed entries
  await knex('jobs').insert([
    { // 1
      ds_id: 'A1549335342',
      source_url: '[application url]',
      title: 'Data Engineer',
      company: 'capital_one',
      description: '... innovate leveraging ...',
      date_published: '2020-05-19',
      location_city: 'Illinois Medical District',
      location_state: 'Illinois',
      geo_locat: '41.868494,-87.673975',
    },
    { // 2
      ds_id: 'A1556216004',
      source_url: '[application url]',
      title: 'Data Engineer or Big Data Engineer',
      company: 'katalyst_technologies_inc.',
      description: '... Big Data Engineer ...',
      date_published: '2020-05-27',
      location_city: 'San Francisco',
      location_state: 'California',
      geo_locat: '37.798085,-122.466538',
    },
    { // 3
      ds_id: 'A1533100037',
      source_url: '[application url]',
      title: 'Data Engineer',
      company: 'mouri_tech',
      description: 'Role Data Engineer Location Wilmington, DE Skillset Language PythonScalaJava ...',
      date_published: '2020-04-30',
      location_city: 'Wilmington',
      location_state: 'Delaware',
      geo_locat: '39.73126,-75.545138',
    },
    { // 4
      ds_id: 'A15331039',
      source_url: '[application url]',
      title: 'Data Engineer',
      company: 'mouri_tech',
      description: 'Role Data Engineer Location Wilmington, DE Skillset Language PythonScalaJava ...',
      date_published: '2020-04-30',
      location_city: 'Wilmington',
      location_state: 'Delaware',
      geo_locat: '39.73126,-75.545138',
    },
    { // 5
      ds_id: 'A1533140',
      source_url: '[application url]',
      title: 'Data Engineer',
      company: 'mouri_tech',
      description: 'Role Data Engineer Location Wilmington, DE Skillset Language PythonScalaJava ...',
      date_published: '2020-04-30',
      location_city: 'Wilmington',
      location_state: 'Delaware',
      geo_locat: '39.73126,-75.545138',
    },
    { // 6
      ds_id: 'A1555038',
      source_url: '[application url]',
      title: 'Data Engineer',
      company: 'maxonic,_inc.',
      description: 'Data Engineer - Las Vegas, NV Our direct client is one of the fortune 500 companies, based out of Las Vegas, NV They are currently in urgent need of Data Engineer Job Description ...  Job title Data Engineer Job location Las Vegas, NV Duration long term OR CTH Required Skills- Create new customer data products bull ETL work to automate creation of data marts bull ...',
      date_published: '2020-05-26',
      location_city: 'Las Vegas',
      location_state: 'Nevada',
      geo_locat: '35.920884,-115.165201',
    },
    { // 7
      ds_id: 'A1552121',
      source_url: '[application url]',
      title: 'Data Engineers',
      company: 'digital_intelligence_systems,_llc',
      description: 'Hi, This is Surya with DISYS, One of our direct client is seeking an Data Engineer. Please let me know if you would be interested in applying for this position. Job Title Data ...  of experience with a streaming data platform including Apache Kafka and Spark Preferred Qualifications 5 years of data modeling and data engineering skills 3 years of microservices ...',
      date_published: '2020-05-22',
      location_city: 'Richmond',
      location_state: 'Virginia',
      geo_locat: '37.959676,-76.711917',
    },
  ]);
};
