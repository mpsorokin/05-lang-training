const conjugationData = {
  words: [
    {
      id: 1,
      infinitive: "avoir",
      participePresent: "ayant",
      participePasse: "eu",
      indicatif: [
        {
          id: 1,
          name: "Présent",
          words: ["j'ai", "tu as", "il/elle a", "nous avons", "vous avez", "ills/elles ont"],
        }, {
          id: 2,
          name: "Imparfait",
          words: ["j'avais", "tu avais", "il/elle avait", "nous avions", "vous aviez", "ills/elles avaient"],
        }, {
          id: 3,
          name: "Futur",
          words: ["j'aurai", "tu auras", "il/elle aura", "nous aurons", "vous aurez", "ills/elles auront"],
        }, {
          id: 4,
          name: "Passé composé",
          words: ["j'ai eu", "tu as eu", "il/elle a eu", "nous avons eu", "vous avez eu", "ills/elles ont eu"],
        }, {
          id: 5,
          name: "Passé simple",
          words: ["j'eus", "tu eus", "il/elle eut", "nous eûmes", "vous eûtes", "ills/elles eurent"],
        }, {
          id: 6,
          name: "Plus-que-parfait",
          words: ["j'avais eu", "tu avais eu", "il/elle avait eu", "nous avions eu", "vous aviez eu", "ills/elles avaient eu"],
        },
      ],
      subjonctif: [
        {
          id: 1,
          name: "Passé antérieur",
          words: ["j'eus eu", "tu eus eu", "il/elle eut eu", "nous eûmes eu", "vous eûtes eu", "ills/elles eurent eu"],
        }, {
          id: 2,
          name: "Futur antérieur",
          words: ["j'aurai eu", "tu auras eu", "il/elle aura eu", "nous aurons eu", "vous aurez eu", "ills/elles auront eu"],
        }, {
          id: 3,
          name: "Présent",
          words: ["que j'aie", "que tu aies", "qu'il/elle ait", "que nous ayons", "que vous ayez", "qu'ills/elles aient"],
        }, {
          id: 4,
          name: "Imparfait",
          words: ["que j'eusse", "que tu eusses", "qu'il/elle eût", "que nous eussions", "que vous eussiez", "qu'ills/elles eussent"],
        }, {
          id: 5,
          name: "Passé",
          words: ["que j'aie eu", "que tu aies eu", "qu'il/elle ait eu", "que nous ayons eu", "que vous ayez eu", "qu'ills/elles aient eu"],
        }, {
          id: 6,
          name: "Plus-que-parfait",
          words: ["que j'eusse eu", "que tu eusses eu", "qu'il/elle eût eu", "que nous eussions eu", "que vous eussiez eu", "qu'ills/elles eussent eu"],
        },
      ],
      conditionnel: [
        {
          id: 1,
          name: "Présent",
          words: ["je aurais", "tu aurais", "il/elle aurait", "nous aurions", "vous auriez", "ills/elles auraient"],
        }, {
          id: 2,
          name: "Passé (1ère forme)",
          words: ["j'aurais eu", "tu aurais eu", "il/elle aurait eu", "nous aurions eu", "vous auriez eu", "ills/elles auraient eu"],
        }, {
          id: 3,
          name: "Passé (2ème forme)",
          words: ["j'eusse été", "tu eusses été", "il/elle eût été", "nous eussions été", "vous eussiez été", "ills/elles eussent été"],
        },
      ],
      participe: [
        {
          id: 1,
          name: "Présent",
          words: ["ayant"],
        }, {
          id: 2,
          name: "Passé",
          words: ["masc. sg. eu", "masc. pl. eu", "fém. sg. eu", "fém. pl. eu"],
        }, {
          id: 3,
          name: "Participe passé composé",
          words: ["ayant eu"],
        }
      ],
      imperatif: [
        {
          id: 1,
          name: "Présent",
          words: ["aie", "ayons", "ayez"],
        }, {
          id: 2,
          name: "Passé",
          words: ["aie eu", "ayons eu", "ayez eu"],
        }
      ],
      infinitif: [
        {
          id: 1,
          name: "Présent",
          words: ["avoir"],
        }, {
          id: 2,
          name: "Passé",
          words: ["avoir eu"],
        }
      ]
    }, {
      id: 2,
      infinitive: "être",
      participePresent: "étant",
      participePasse: "été",
      indicatif: [
        {
          id: 1,
          name: "Présent",
          words: ["je suis", "tu es", "il/elle est", "nous sommes", "vous êtes", "ills/elles sont"],
        }, {
          id: 2,
          name: "Imparfait",
          words: ["j'étais", "tu étais", "il/elle était", "nous étions", "vous étiez", "ills/elles étaient"],
        }, {
          id: 3,
          name: "Futur",
          words: ["je serai", "tu seras", "il/elle sera", "nous serons", "vous serez", "ills/elles seront"],
        }, {
          id: 4,
          name: "Passé composé",
          words: ["j'ai été", "tu as été", "il/elle a été", "nous avons été", "vous avez été", "ills/elles ont été"],
        }, {
          id: 5,
          name: "Passé simple",
          words: ["je fus", "tu fus", "il/elle fut", "nous fûmes", "vous fûtes", "ills/elles furent"],
        }, {
          id: 6,
          name: "Plus-que-parfait",
          words: ["j'avais été", "tu avais été", "il/elle avait été", "nous avions été", "vous aviez été", "ills/elles avaient été"],
        },
      ],
      subjonctif: [
        {
          id: 1,
          name: "Passé antérieur",
          words: ["j'eus été", "tu eus été", "il/elle eut été", "nous eûmes été", "vous eûtes été", "ills/elles eurent été"],
        }, {
          id: 2,
          name: "Futur antérieur",
          words: ["j'aurai été", "tu auras été", "il/elle aura été", "nous aurons été", "vous aurez été", "ills/elles auront été"],
        }, {
          id: 3,
          name: "Présent",
          words: ["que je sois", "que tu sois", "qu'il/elle soit", "que nous soyons", "que vous soyez", "qu'ills/elles soient"],
        }, {
          id: 4,
          name: "Imparfait",
          words: ["que je fusse", "que tu fusses", "qu'il/elle fût", "que nous fussions", "que vous fussiez", "qu'ills/elles fussent"],
        }, {
          id: 5,
          name: "Passé",
          words: ["que j'aie été", "que tu aies été", "qu'il/elle ait été", "que nous ayons été", "que vous ayez été", "qu'ills/elles aient été"],
        }, {
          id: 6,
          name: "Plus-que-parfait",
          words: ["que j'eusse été", "que tu eusses été", "qu'il/elle eût été", "que nous eussions été", "que vous eussiez été", "qu'ills/elles eussent été"],
        },
      ],
      conditionnel: [
        {
          id: 1,
          name: "Présent",
          words: ["je serais", "tu serais", "il/elle serait", "nous serions", "vous seriez", "ills/elles seraient"],
        }, {
          id: 2,
          name: "Passé (1ère forme)",
          words: ["j'aurais été", "tu aurais été", "il/elle aurait été", "nous aurions été", "vous auriez été", "ills/elles auraient été"],
        }, {
          id: 3,
          name: "Passé (2ème forme)",
          words: ["j'eusse été", "tu eusses été", "il/elle eût été", "nous eussions été", "vous eussiez été", "ills/elles eussent été"],
        },
      ],
      participe: [
        {
          id: 1,
          name: "Présent",
          words: ["étant"],
        }, {
          id: 2,
          name: "Passé",
          words: ["masc. sg. été", "masc. pl. été", "fém. sg. été", "fém. pl. été"],
        }, {
          id: 3,
          name: "Participe passé composé",
          words: ["ayant été"],
        }
      ],
      imperatif: [
        {
          id: 1,
          name: "Présent",
          words: ["sois", "soyons", "soyez"],
        }, {
          id: 2,
          name: "Passé",
          words: ["aie été", "ayons été", "ayez été"],
        }
      ],
      infinitif: [
        {
          id: 1,
          name: "Présent",
          words: ["avoir"],
        }, {
          id: 2,
          name: "Passé",
          words: ["avoir eu"],
        }
      ]
    }
  ]
};

export default conjugationData;