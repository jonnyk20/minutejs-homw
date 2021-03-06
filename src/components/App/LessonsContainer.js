import React, { Component } from 'react';
import Lesson from './Lesson';

const lessons = [
  {
    id: 1,
    title: 'Hello World',
    link: 'https://www.instagram.com/p/Beza7dkB_lK/',
    resources: []
  },
  {
    id: 2,
    title: 'ES6 Arrow Functions',
    link: 'https://www.instagram.com/p/Be0sa-chj3-/',
    resources: [
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
      },
      {
        anchorText: 'Sitepoint Article',
        link:
          'https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/'
      }
    ]
  },
  {
    id: 3,
    title: 'ES6 Arrow Functions pt. 2 Scoping',
    link: 'https://www.instagram.com/p/Be3NxqNBzlZ/',
    resources: [
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions'
      },
      {
        anchorText: 'Learn ES6 The Dope Way Part II: Arrow functions and the ‘this’ keyword',
        link:
          'https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881'
      }
    ]
  },
  {
    id: 4,
    title: 'ES6 Object Destructuring',
    link: 'https://www.instagram.com/p/Be51G17hZDu/',
    resources: [
      {
        anchorText: 'A Dead Simple Intro to Destcructuring Javascript Objects (Wes Bos)',
        link:
          'http://wesbos.com/destructuring-objects/'
      },
      {
        anchorText: 'Exploring JS: Object Destructuring',
        link:
          'http://exploringjs.com/es6/ch_destructuring.html#_object-destructuring'
      }
    ]
  },
  {
    id: 5,
    title: 'ES6 Nested Object Destructuring',
    link: 'https://www.instagram.com/p/Be8Xeu0Buw8/',
    resources: [
      {
        anchorText: 'Destructuring Nested Objects',
        link:
          'https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8'
      },
      {
        anchorText: 'MDN Documentation',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring'
      }
    ]
  },
  {
    id: 6,
    title: 'ES6 Parameter Destructuring',
    link: 'https://www.instagram.com/p/Be_C3H9Bu3x/',
    resources: [
      {
        anchorText: 'Destructuring and parameter handling in ECMAScript 6',
        link:
          'http://2ality.com/2015/01/es6-destructuring.html'
      }
    ]
  },
  {
    id: 7,
    title: 'ES6 Default Parameters',
    link: 'https://www.instagram.com/p/BfB0g7Khw80/',
    resources: [
      {
        anchorText: 'MDN Docs - Default Parameters',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters'
      },
      {
        anchorText: 'CSS Tricks - Using Default Parameters in ES6',
        link:
          'https://css-tricks.com/using-default-parameters-es6/'
      }
    ]
  },
  {
    id: 8,
    title: 'ES6 Array Destructuring',
    link: 'https://www.instagram.com/p/BfELuoOhw-D',
    resources: [
      {
        anchorText: 'MDN Docs - Destructuring Assignment',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment'
      },
      {
        anchorText: 'ES6: Destructuring — an elegant way of extracting data from arrays and objects in JavaScript',
        link:
          'http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/'
      }
    ]
  },
  {
    id: 9,
    title: 'ES6 Property Value Shorthand',
    link: 'https://www.instagram.com/p/BfG_05UBxty',
    resources: [
      {
        anchorText: 'Object initializer (MDN)',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer'
      },
      {
        anchorText: 'ECMAScript 6 and Object Literal Property Value Shorthand',
        link:
          'http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/'
      },
      {
        anchorText: 'Learning ES6: Enhanced object literals',
        link:
          'http://www.benmvp.com/learning-es6-enhanced-object-literals/'
      }
    ]
  },
  {
    id: 10,
    title: 'ES6 Computed Property Names',
    link: 'https://www.instagram.com/p/BfJq5wYhG52',
    resources: [
      {
        anchorText: 'Object initializer (MDN)',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer'
      },
      {
        anchorText: 'ECMAScript 6 and Object Literal Property Value Shorthand',
        link:
          'http://www.deadcoderising.com/2017-03-28-es6-destructuring-an-elegant-way-of-extracting-data-from-arrays-and-objects-in-javascript/'
      },
      {
        anchorText: 'Learning ES6: Enhanced object literals',
        link:
          'http://www.benmvp.com/learning-es6-enhanced-object-literals/'
      }
    ]
  },
  {
    id: 11,
    title: 'ES6 Enhanced Method Properties',
    link: 'https://www.instagram.com/p/BfLwXGnBUqL',
    resources: [
      {
        anchorText: 'ES6 Features: Method Properties',
        link:
          'http://es6-features.org/#MethodProperties'
      },
      {
        anchorText: 'MDN DOCS: Method Definitions',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions'
      }
    ]
  },
  {
    id: 12,
    title: 'ES6 \'var\' vs. \'let\' and \'const\'',
    link: 'https://www.instagram.com/p/BfObTM1BMCa',
    resources: [
      {
        anchorText: 'Wes Bos: ES6 let VS const variables',
        link:
          'http://wesbos.com/let-vs-const/'
      },
      {
        anchorText: 'MDN DOCS: Method Definitions',
        link:
          'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75'
      }
    ]
  },
  {
    id: 13,
    title: 'ES6 Variable Scoping',
    link: 'https://www.instagram.com/p/BfQ_c9gBYP9',
    resources: [
      {
        anchorText: 'The Joys of Block Scoping With ES6',
        link:
          'https://www.sitepoint.com/joys-block-scoping-es6/'
      },
      {
        anchorText: 'ES6: var, let and const — The battle between function scope and block scope',
        link:
          'http://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/'
      }
    ]
  },
  {
    id: 14,
    title: 'ES6 Template Literals',
    link: 'https://www.instagram.com/p/BfTxicHBu5Z',
    resources: [
      {
        anchorText: 'MDN Docs: Template Literals',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals'
      },
      {
        anchorText: 'Getting Literal With ES6 Template Strings',
        link:
          'https://developers.google.com/web/updates/2015/01/ES6-Template-Strings'
      },
      {
        anchorText: 'CSS Tricks: Template Literals',
        link:
          'https://css-tricks.com/template-literals'
      }
    ]
  },
  {
    id: 15,
    title: 'ES6 \'for...of\' loop',
    link: 'https://www.instagram.com/p/BfW90ihhPOq',
    resources: [
      {
        anchorText: 'MDN Docs: for..of',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of'
      },
      {
        anchorText: 'The for-of loop - Exploring JS',
        link:
          'http://exploringjs.com/es6/ch_for-of.html'
      }
    ]
  },
  {
    id: 16,
    title: 'Transpiling ES6 With Babel',
    link: 'https://www.instagram.com/p/BfZmWK4hlUA',
    resources: [
      {
        anchorText: 'CSS Tricks: Transpiling ES6',
        link:
          'https://css-tricks.com/transpiling-es6'
      },
      {
        anchorText: 'Babel',
        link:
          'https://babeljs.io/'
      }
    ]
  },
  {
    id: 17,
    title: 'ES6 Spread Operator',
    link: 'https://www.instagram.com/p/BfcIYdqhhRv',
    resources: [
      {
        anchorText: 'ES6 Features: Spread Operator',
        link:
          'http://es6-features.org/#SpreadOperator'
      },
      {
        anchorText: '6 Great Uses of the Spread Operator',
        link:
          'https://davidwalsh.name/spread-operator'
      },
      {
        anchorText: 'MDN Docs: Spread Syntax',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'
      }
    ]
  },
  {
    id: 18,
    title: 'ES6 Rest Parameter',
    link: 'https://www.instagram.com/p/BfetSwRh_OF',
    resources: [
      {
        anchorText: 'MDN DOCS: ES6 Rest Parameters',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters'
      },
      {
        anchorText: 'How to Use ES6 Arguments and Parameters',
        link:
          'https://www.smashingmagazine.com/2016/07/how-to-use-arguments-and-parameters-in-ecmascript-6/'
      }
    ]
  },
  {
    id: 19,
    title: 'ES6 Sets',
    link: 'https://www.instagram.com/p/BfhU2hUhSPj',
    resources: [
      {
        anchorText: 'MDN DOCS: ES6 Sets',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set'
      },
      {
        anchorText: 'ES6 Working with Sets in Javascript',
        link:
          'http://www.deadcoderising.com/es6-working-with-sets-in-javascript/'
      }
    ]
  },
  {
    id: 20,
    title: 'ES6 Maps',
    link: 'https://www.instagram.com/p/Bfj1OqghckG',
    resources: [
      {
        anchorText: 'MDN DOCS: ES6 Maps',
        link:
          'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map'
      },
      {
        anchorText: 'What you Should Know About ES6 Maps',
        link:
          'https://hackernoon.com/what-you-should-know-about-es6-maps-dc66af6b9a1e'
      },
      {
        anchorText: 'ES6 Maps in Depth',
        link:
          'https://ponyfoo.com/articles/es6-maps-in-depth'
      }
    ]
  },
  {
    id: 21,
    title: 'How to Win a Hackathon: Tip #1',
    link: 'https://www.instagram.com/p/Bfr4iVChJQO',
    resources: []
  },
  {
    id: 22,
    title: 'How to Win a Hackathon: Tip #2',
    link: 'https://www.instagram.com/p/BfuG9afhJhJ',
    resources: []
  },
  {
    id: 23,
    title: 'How to Win a Hackathon: Tip #3',
    link: 'https://www.instagram.com/p/BfwkBRthAki',
    resources: []
  },
  {
    id: 24,
    title: 'How to Win a Hackathon: Tip #4',
    link: 'https://www.instagram.com/p/BfzJ1WbhdqD',
    resources: []
  },
  {
    id: 25,
    title: 'How to Win a Hackathon: Tip #5',
    link: 'https://www.instagram.com/p/Bf1kNEvBd8V',
    resources: []
  },
  {
    id: 26,
    title: 'ES6 Find',
    link: 'https://www.instagram.com/p/Bf4wnvABMcO',
    resources: [
      {
        anchorText: 'MDN Docs: Array.prototype.find()',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'
      }
    ]
  },
  {
    id: 27,
    title: 'ES6 findIndex',
    link: 'https://www.instagram.com/p/Bf7Web8h4vV',
    resources: [
      {
        anchorText: 'MDN Docs: Array.prototype.findIndex()',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex'
      }
    ]
  },
  {
    id: 28,
    title: 'Fetch API',
    link: 'https://www.instagram.com/p/Bf92TT9BCtL',
    resources: [
      {
        anchorText: 'MDN Docs: Fetch API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
      },
      {
        anchorText: 'Google Dev: Introduction to fetch()',
        link: 'https://developers.google.com/web/updates/2015/03/introduction-to-fetch'
      }
    ]
  },
  {
    id: 29,
    title: 'Fetch API: Options',
    link: 'https://www.instagram.com/p/BgAfAO_Bpin',
    resources: [
      {
        anchorText: 'MDN Docs: Fetch API',
        link: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API'
      },
      {
        anchorText: 'Google Dev: Introduction to fetch()',
        link: 'https://developers.google.com/web/updates/2015/03/introduction-to-fetch'
      }
    ]
  },
  {
    id: 30,
    title: 'Async / Await',
    link: 'https://www.instagram.com/p/BgDJn8xnyp4',
    resources: [
      {
        anchorText: 'MDN Docs: Await',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await'
      },
      {
        anchorText: 'JavaScript ES 2017: Learn Async/Await by Example',
        link: 'https://codeburst.io/javascript-es-2017-learn-async-await-by-example-48acc58bad65'
      }
    ]
  }
];

class LessonsContainer extends Component {
  state = {
    isLoaded: false
  };
  componentWillMount() {
    this.loadInstagram();
  }

  loadInstagram = () => {
    if (!window.instgrm) {
      const s = document.createElement('script');
      s.async = s.defer = true;
      s.src = 'https://platform.instagram.com/en_US/embeds.js';
      s.id = 'react-instagram-embed-script';
      s.onload = this.onLoad;
      const body = document.body || null;
      if (body) {
        body.appendChild(s);
      }
    }
  };

  onLoad = () => {
    console.log('Loaded instagram');
    this.setState({
      isLoaded: true
    });
  };

  renderLessons = () => {
    return lessons.sort((a, b) => b.id - a.id).map(lesson => {
      return (
        <Lesson
          key={lesson.id}
          lesson={lesson}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{this.renderLessons()}</div>
      </div>
    );
  }
}

export default LessonsContainer;
