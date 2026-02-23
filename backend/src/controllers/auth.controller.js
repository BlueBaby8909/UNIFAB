    import bcrypt from 'bcrypt';
    import jwt from 'jsonwebtoken';
    import { createUser, findUserByEmail } from '../models/user.model.js';
    import dotenv from 'dotenv';

    dotenv.config();

    async function registerUser(req, res) {
        const {firstName, lastName, email, password, role } = req.body;
        try{
            const existingUser = await findUserByEmail(email);
            if (existingUser){
                return res.status(409).json({ message: 'Email already registered' });
            }
            const hashedPassword =  await bcrypt.hash(password, 10);

            await createUser(firstName, lastName, email, hashedPassword, role);
            
            return res.status(201).json({message: 'User registered successfully',
        });
        }catch(error){
        console.error(error);
        return res.status(500).json({message: 'Server Error'})
        }
    }

    async function loginUser(req, res) {
        const { email, password } = req.body;

        try {
            const user = await findUserByEmail(email);

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const correctPass = await bcrypt.compare(password, user.password);

            if (!correctPass) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const token = jwt.sign(
                { id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d'}
            )

            return res.status(200).json({ 
                message: 'Login successful', token
            });

        } catch (error) {
            console.error("Login Error:", error);
            return res.status(500).json({ message: 'Server Error' });
        }
    }


    export { registerUser, loginUser };