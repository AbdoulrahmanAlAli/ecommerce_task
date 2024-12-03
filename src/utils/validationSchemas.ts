import { z } from 'zod'

//Craete Products Schema
export const createProductsSchema =  z.object({
    title: z.string().min(2).max(200),
    description: z.string().min(10),
    price: z.number().min(1)
})

// Register Schema
export const registerSchema = z.object({
    username: z.string().min(2).max(100),
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6)
})

// Login Schema
export const loginSchema = z.object({
    email: z.string().min(3).max(200).email(),
    password: z.string().min(6)
})