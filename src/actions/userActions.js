export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: [{
      id: Date.now(),
      name: "Jon Snow",
      status: "Completed",
      email: "jsnow@kinginthenorth.com",
      organization: "Winterfell",
      program: "Fight the WhiteWalkers",
      type: "Lord Commander",
      programStatus: "Access Granted",
      requestedDate: "05/25/2017",
      completedDate: "05/30/2017",
    },{
      id: Date.now(),
      name: "Denerys Targaryen",
      status: "Completed",
      email: "dT@motherofdragons.com",
      organization: "Dragonstone",
      program: "Capture Kings landing",
      type: "Queen",
      programStatus: "Access Granted",
      requestedDate: "05/25/2017",
      completedDate: "05/30/2017",
    }]
  }
}

export function setUserName(name) {
  return {
    type: 'SET_USER_NAME',
    payload: name,
  }
}

export function setUserAge(age) {
  return {
    type: 'SET_USER_AGE',
    payload: age,
  }
}
