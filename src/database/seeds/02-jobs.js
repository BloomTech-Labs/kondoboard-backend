exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          datascience_id: "A1551130791",
          source_url: "https://www.adzuna.com/land/ad/1551130791?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=979581E2002B04CAA97AE0C211527E4893562357",
          title: "Data Engineer",
          description: "Job Title Data Engineer Location Portland, OR Duration 6-12 Months Primary Skill MS SQL Other Mandatory Skills SQL Server, No-SQL databases, SQL Python Project Description ...  of outputs Good knowledge of Data Engineering, Big Data Analytics, Excellent analytical and problem-solving skills A knack for independent and group work Scrupulous approach to duties ...",
          date_published: "2020-05-21",
          location_raw: "Portland"
        },
        {
          datascience_id: "A1521288337",
          source_url: "https://www.adzuna.com/land/ad/1521288337?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=3850D5181972D3577432AB845ACE7A684586D6DB",
          title: "Data Engineer",
          description: "Description We are seeking a highly talented Data Engineer (DE) within the Data Engineering group. We need your help to build systems to enable data-driven decision-making. Our ...  Data Engineering team owns and develops the technology platform that offers decision makers both performance metrics and analysis as well as the self-service capability to perform ...",
          date_published: "2020-04-14",
          location_raw: "Newark"  
        },
        {
          datascience_id: "A1550124138",
          source_url: "https://www.adzuna.com/land/ad/1550124138?se=wGHBDnif6hGCPf0B37M_Tg&utm_medium=api&utm_source=da871bdc&v=F9032DFA855E78FC254649635160B39FEC3E207E",
          title: "Data Engineer",
          description: "Hi, Please find the below requirements. You can respond back with an updated resume to praveenrajpvkc.com Title Data Engineer (Azure Data Engineer )Location Redmond, WAClient ...  Microsoft Note We are looking for a Data Engineer with Azure functions, azure pipelines design, ADF, ADLS and problem solving using C or python Responsibilities bull Build and maintain ETL ...",
          date_published: "2020-05-20",
          location_raw: "Redmond"
        },
      ]);
    });
};
