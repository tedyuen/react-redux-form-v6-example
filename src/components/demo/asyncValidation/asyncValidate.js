const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function asyncValidate(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      throw { username: 'That username is taken' }
    }
  })
}

export default asyncValidate
