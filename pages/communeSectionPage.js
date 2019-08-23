module.exports = {
  url: () => 'http://192.168.88.76.xip.io:8091/#/',
  sections: {
    leftMenu: {
      selector: () => '.menu _3zRk2',
      elements: {
        userSection: {
          selector: () => '._1TyQX',
          elements: {
            photo: {
              selector: () => '.ui.circular.image'
            },
            name: {
              selector: () => '._3s35j'
            },
            jobTitle: {
              selector: () => '._3xVea'
            },
            role: {
              selector: () => '._24kGO'
            }
          }
        },
        dashboard: {
          selector: () => 'a[href="#/dashboard"]'
        },
        timesheet: {
          selector: () => 'a[href="#/timesheet"]'
        },
        timetracking: {
          selector: () => 'a[href="#/timetracking"]'
        },
        absences: {
          selector: () => 'a[href="#/absences"]'
        },
        contacts: {
          selector: () => 'a[href="#/contacts"]'
        },
        myaccount: {
          selector: () => '.ui.vertical.accordion:first-child',
          elements: {
            profile: () => 'a[href="#/myAccount/profile"]',
            cv: () => 'a[href="#/myAccount/curriculum-vitae"]',
            skills: () => 'a[href="#/myAccount/my-skills"]',
            presetsevents: () => 'a[href="#/myAccount/presets-events"]',
            creditpoints: () => 'a[href="#/myAccount/credit-points"]'
          }
        },
        surveys: {
          selector: () => 'a[href="#/surveys"]'
        },
        eveluations: {
          selector: () => '.ui.vertical.accordion:nth-child(2)',
          elements: {
            selfevaluations: {
              selector: () => 'a[href="#/evaluations/self-evaluations"]'
            },
            receivedevaluations: {
              selector: () => 'a[href="#/evaluations/received-evaluations"]'
            },
            providedevaluations: {
              selector: () => 'a[href="#/evaluations/provided-evaluations"]'
            }
          }
        }
      }
    },
    topMenu: {
      selector: () => '.ui.text._20oOB.menu',
      elements: {
        searchBar: () => 'input[name=contactName]',
        language: () => '.item.CH3x3:nth-child(1)',
        documentation: () => '.item.CH3x3:nth-child(2)',
        support: () => '.item.CH3x3:nth-child(3)',
        logout: () => '.item.CH3x3:nth-child(4)'
      }
    }
  }
}