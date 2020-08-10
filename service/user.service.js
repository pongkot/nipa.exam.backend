const userRepo = require('../repository/user.repository')

const createNewUser = (
    data,
    repo = userRepo
) => {
    return data.forEach(i => {
        repo.insertUser(i.id, i.name, i.email)
    })
}

const listUsers = (
    repo = userRepo
) => {
    return new Promise(resolve => {
        repo.selectUser().then(r => {
            resolve(r.recordset)
        })
    })
}

const csvToUserData = (buffer) => {
    const toString = buffer.toString()
    const toList = toString.split('\r\n')
    return toList.map(i => {
        const data = i.split(',')
        return {
            id: data[0],
            name: data[1],
            email: data[2]
        }
    })
}

const userDataToCsv = (data) => {
    const raw = data.map(i => {
        return `${i.id},${i.name},${i.email}`
    }).join('\r\n')
    return `id,name,email\r\n` + raw
}

module.exports = {
    createNewUser,
    csvToUserData,
    listUsers,
    userDataToCsv,
}
