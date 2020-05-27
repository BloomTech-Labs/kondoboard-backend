exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        { // id: 1
          datascience_id: "A1521288337",
          source_url: "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
          title: "Data Engineer",
          description: "Description We are seeking a highly talented Data Engineer (DE) within the Data Engineering group. We need your help to build systems to enable data-driven decision-making. Our ...  Data Engineering team owns and develops the technology platform that offers decision makers both performance metrics and analysis as well as the self-service capability to perform ...",
          date_published: "2020-04-14",
          location_raw: "Newark"  
        },
        { // id: 2
          datascience_id: "A1550124138",
          source_url: "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B39FEC3E207E",
          title: "Data Engineer",
          description: "Hi, Please find the below requirements. You can respond back with an updated resume to praveenrajpvkc.com Title Data Engineer (Azure Data Engineer )Location Redmond, WAClient ...  Microsoft Note We are looking for a Data Engineer with Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python Responsibilities bull Build and maintain ETL ...",
          date_published: "2020-05-20",
          location_raw: "Redmond"
        },
        { // id: 3
          datascience_id: "A1550551",
          source_url: "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B39FEC3E207E",
          title: "Data Engineer",
          description: "Hi, Please find the below requirements: Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python ...",
          date_published: "2020-05-22",
          location_raw: "Redmond"
        },
        { // id: 4
          datascience_id: "B1550551",
          source_url: "application url",
          title: "Data Engineer",
          description: "Hi, Please find the below requirements: Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python ...",
          date_published: "2020-05-22",
          location_raw: "Redmond"
        },
        { // id: 5
          datascience_id: "C1550551",
          source_url: "application url",
          title: "Data Engineer",
          description: " Microsoft Note We are looking for a Data Engineer with Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python Responsibilities bull Build and maintain ETL ...",
          date_published: "2020-05-23",
          location_raw: "Redmond"
        },
        { // id: 6
          datascience_id: "D1550551",
          source_url: "application url",
          title: "Full Stack Web Developer",
          description: "This position affords the opportunity to collaborate with other experienced engineers while also providing plenty of space for autonomy and coding.",
          date_published: "2020-05-24",
          location_raw: "Redmond"
        },
        { // id: 7
          datascience_id: "E1550551",
          source_url: "application url",
          title: "Front End Web Developer",
          description: "Hi, Please find the below requirements. You can respond back with an updated resume to praveenrajpvkc.com Title Data Engineer (Azure Data Engineer )Location Redmond, WAClient ...  Microsoft Note We are looking for a Data Engineer with Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python Responsibilities bull Build and maintain ETL ...",
          date_published: "2020-05-20",
          location_raw: "Redmond"
        },
        
      ]);
    });
};
