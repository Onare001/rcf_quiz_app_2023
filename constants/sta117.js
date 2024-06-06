export const quizData = {
    title: 'General Knowledge Quiz',
    description: 'Test your knowledge with these general knowledge questions!',
    questions: [
      { 
      question: '1Which of the following is not a classification of statistics?   ',
      options: ['descriptive statistics', 'inferential statistics', 'arithmetic statistics', 'inductive  statistics'],
      answer: 'arithmetic statistics'
      },
      { 
      question: '2. the study of all objects  possessing common characteristics is ?',
      options: ['census', 'statistics scope', 'parameter', 'population'],
      answer: 'population'
      },
      { 
      question: '3.   ………….  Is the characteristics of description obtained from a population    ',
      options: ['questionnaire', 'parameter', 'census', 'experiment'],
      answer: 'parameter'
      },
      { 
      question: '4. all but one of the following is not a type of scale in statistics?',
      options: ['nominal scale', 'ratio scale', 'sampling scale', 'ordinal scale '],
      answer: 'sampling scale'
      },
      { 
      question: '5. ……… scale is meant for identification',
      options: ['sampling', 'nominal', 'ratio', 'ordinal'],
      answer: 'nominal'
      },
      { 
      question: '6. which of the following experimental method eliminates interviewers bias ?',
      options: ['observation', 'direct interview', 'group interview', 'questionnaire'],
      answer: 'questionnaire'
      },
      { 
      question: '7.  which of the following is not a classification of sampling?   ',
      options: ['stratified systematic sampling', 'systematic sampling', 'simple random sampling', 'quota sampling'],
      answer: 'stratified systematic sampling'
      },
      { 
      question: '8. in which of the following sampling types is population divided into stratas ',
      options: ['stratified random sampling', 'simple stratified sampling', 'stratified systematic sampling', 'cluster sampling '],
      answer: 'stratified random sampling'
      },
      { 
      question: '9.  variables in statistics can be divided into …… types     ',
      options: ['4', '2', '3', '5'],
      answer: '2'
      },
      { 
      question: '10. statistical experiment has two types which are',
      options: ['observational and presumed ', 'questionnaire and interview ', 'observational and designed', ' designed and presumed '],
      answer: 'observational and designed'
      },
      { 
      question: '11. find the standard deviation if the variance is 9 ',
      options: ['3', '9', '27 ', '81 '],
      answer: '3'
      },
      { 
      question: '12. find the mode of 8,4,4,3,6,8,9,6,7,6,2      ',
      options: ['8', '6', '4', '2'],
      answer: '6'
      },
      { 
      question: '13.  calculate the mean deviation of 2,4,6,8     ',
      options: ['2.0', ' 4.5', '4.0', '5.1'],
      answer: '2.0'
      },
      { 
      question: '14. 2,4,6,8. If the mean of this distribution is 5, calculate the sum of their deviation from the mean ',
      options: ['1', '-1', '0', '2 '],
      answer: '0'
      },
      { 
      question: '15. calculate the mean of 48,45,75,39,51,47,50,47     ',
      options: ['50.30', '50.25', '50.35', '50.15'],
      answer: '50.25'
      },
      { 
      question: '16. obtain the arithmetic mean of 8,3,5,12 ',
      options: ['7', '8', '4 ', '5 '],
      answer: '7'
      },
      { 
      question: '17. if the mean of 1,3,4,5,7 is 4, find the sum of the square of their deviation from the mean.    ',
      options: ['25', '20', '18', '24'],
      answer: '20'
      },
      { 
      question: '18. calculate the standard deviation and the variance of 2,4,6,8    ',
      options: ['2.0 & 3.2', '3.0 &9.0', '. 4.0 &16.0 ', ' 2.6 & 6.7'],
      answer: '2.6 & 6.7'
      },
      { 
      question: '19.  obtain the mode of 4,1,2,4,3,3,2,5,4,5,3,1,3     ',
      options: ['4', '3', '2', '1'],
      answer: '3'
      },
      { 
      question: '20. obtain the mean and median of 1,2,3,4,5 ',
      options: ['3&3', '2&3 ', ' 4&3 ', '3&4 '],
      answer: '3&3'
      }
      ,
      // { 
      // question: '   calculate the range of 7,3,2,5,0,7,1,4    ',
      // options: ['1', ' 3', '5', '7'],
      // answer: '7'
      // },
      // { 
      // question: '    calculate the standard deviation of 3,5,12,2,3   ',
      // options: ['4.0', '4.1', '4.2', '4.3'],
      // answer: '4.1'
      // },
      // { 
      // question: 'find the geometric mean of 2,4,6,8 ',
      // options: ['4.24', '5.00', '4.00 ', '4.43'],
      // answer: '4.43 '
      // },
      // { 
      // question: 'Obtain the geometric mean of 2,4,8     ',
      // options: ['3.3', '4.0', '4.7', '5.2'],
      // answer: '4.0'
      // },
      // { 
      // question: 'calculate the harmonic mean of 2,4,3,5,6 ',
      // options: ['4.00', '5.35', '3.45', '3.65 '],
      // answer: '3.45 '
      // },
      // { 
      // question: '   the attendance of a student is 60 and 70 and the quiz is 90. If the quiz is five times as much as one attendance, what is the mean?     ',
      // options: ['73.5', '82.9', '65.4', '97.0'],
      // answer: '82.9'
      // },
      // { 
      // question: 'all but one is not a method of calculating mean ',
      // options: ['coding method ', 'simple method', ' the long method ', 'assumed mean method '],
      // answer: 'simple method'
      // },
      // { 
      // question: '  find the mode of 3,4,5,3,2,3,5,7,6,7,5,4,3,2,2,3     ',
      // options: ['2', '3 ', '4', '5'],
      // answer: '3'
      // },
      // { 
      // question: 'the empirical relationship between mean, median, and mode is ',
      // options: ['mean+mode=3(mean-median)  ', 'mean-mode=3(mean +median) ', 'mean-mode=3(mean-median)', '. mean+mode=3(mean+median) '],
      // answer: 'mean-mode=3(mean-median)'
      // },
      // { 
      // question: '    calculate the harmonic mean of 1,2,3,4,5   ',
      // options: ['2.2', '2.4 ', '2.3', '2.1'],
      // answer: '2.2'
      // },
      // { 
      // question: 'obtain the geometric mean 4,2,4 ',
      // options: ['3.15', '2.35', '3.18', ' 2.07'],
      // answer: '3.18 '
      // },
      // { 
      // question: '  A Sunday sermon is four times heavier than the weekly sermon, if the Sunday sermon is 95kg and the midweek sermons are 70kg & 80kg. obtain the mean of the sermons  ',
      // options: ['88.3', '85.3 ', '81.7', '88.7'],
      // answer: '88.3'
      // },
      // { 
      // question: 'which of the following is not an advantage of sampling? ',
      // options: ['it saves time', 'it gives greater accuracy ', 'it saves cost   ', 'it catches the population attention easily '],
      // answer: ' it catches the population attention easily'
      // },
      // { 
      // question: ' calculate the mean of 3,5,21,6,5 ',
      // options: ['8', ' 7', '6', '5'],
      // answer: '8'
      // },
      // { 
      // question: 'calculate the degree of the divorced and the percentage of the married from the following marital status. Singles are 35, married are 130, widowed are 25 and the divorced are 10. ',
      // options: ['18 and 65', '65 and 18 ', '18 and 70 ', '18 and 25 '],
      // answer: '18 and 65 '
      // }
      ]
      
      
  };
  