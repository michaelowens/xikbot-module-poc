// Database mock
let Database = {
    client: {
        async hgetAsync () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({value: 'some db value'})
                }, 200)
            })
        }
    }
}

export default Database
