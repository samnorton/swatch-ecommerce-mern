import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@swatch.com',
        password: bcrypt.hashSync('Pirate@1976', 10),
        isAdmin: true
    },
    {
        name: 'Robert Smith',
        email: 'robert@gmail.com',
        password: bcrypt.hashSync('Pirate@1976', 10)
    },    
    {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        password: bcrypt.hashSync('Pirate@1976', 10)
    }
]

export default users
