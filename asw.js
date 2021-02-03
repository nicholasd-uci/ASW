const { prompt } = require('inquirer')

const Assassin = require('./lib/Assassin.js')
const Soldier = require('./lib/Soldier.js')
const Wizard = require('./lib/Wizard.js')

const buildAssassin = (data) => {
  prompt([
    {
      type: 'input',
      name: 'stealth',
      message: 'What is the character stealth skill?'
    },
    {
      type: 'input',
      name: 'poison',
      message: 'What is the character poison name?'
    }
  ])
    .then(({ stealth, poison }) => {
      const assassin = new Assassin(data.name, data.hp, data.mp, data.weapon, stealth, poison)
      console.log(assassin)
      menu()
    })
    .catch(err => console.log(err))
}

const buildSoldier = (data) => {
  prompt([
    {
      type: 'input',
      name: 'rank',
      message: 'What is the character rank?'
    },
    {
      type: 'input',
      name: 'banner',
      message: 'What is the character banner name?'
    }
  ])
    .then(({ rank, banner }) => {
      const soldier = new Soldier(data.name, data.hp, data.mp, data.weapon, rank, banner)
      console.log(soldier)
      menu()
    })
    .catch(err => console.log(err))
}

const buildWizard = (data) => {
  prompt([
    {
      type: 'input',
      name: 'element',
      message: 'What is the character elemental type?'
    },
    {
      type: 'input',
      name: 'summon',
      message: 'What is the character summon name?'
    }
  ])
    .then(({ element, summon }) => {
      const wizard = new Wizard(data.name, data.hp, data.mp, data.weapon, element, summon)
      console.log(wizard)
      menu()
    })
    .catch(err => console.log(err))
}

const menu = () => {
  prompt([
    {
      type: 'list',
      name: 'character',
      choices: ['Assassin', 'Soldier', 'Wizard'],
      message: 'Select the type of character you want to make:'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the character name?'
    },
    {
      type: 'number',
      name: 'hp',
      message: 'What is the character hp (Hit Points)?'
    },
    {
      type: 'number',
      name: 'mp',
      message: 'What is the character mp (Magic Points)?'
    },
    {
      type: 'input',
      name: 'weapon',
      message: 'What is the character weapon?'
    }
  ])
    .then(data => {
      switch (data.character) {
        case 'Assassin':
          buildAssassin(data)
          break
        case 'Soldier':
          buildSoldier(data)
          break
        case 'Wizard':
          buildWizard(data)
          break
      }
    })
    .catch(err => console.log(err))
}

menu()