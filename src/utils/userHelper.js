import supabase from "./supabase"
import { faker } from '@faker-js/faker'

export const getFakeUser = () => {
    return {
        id: Date.now(),
        avatar: faker.image.avatar(),
        name: faker.internet.userName(),
        country: faker.location.country(),
        company: faker.company.buzzPhrase(),
        role: faker.person.jobTitle(),
    }
}

export const getUsers = async() => {
    let { data: user, error } = await supabase
    .from('user')
    .select('*')

    return user;
}

export const insertUser = async(user) => {
    const { data, error } = await supabase
    .from('user')
    .insert([user])
    .select()

    return data;
}

export const updateUser = async (newUser) => {
    await supabase
    .from('user')
    .update({ ...newUser })
    .eq('id', newUser.id)
    .select()
}

export const deleteUser = async (id) => {
    await supabase
    .from('user')
    .delete()
    .eq('id', id)
}

// 
// 
//

export const getLogin = async() => {
    let { data: loginData, error } = await supabase
        .from('loginData')
        .select('*')
    return (loginData);
}
export const addLogin = async(user) => {
    const { data, error } = await supabase
        .from('loginData')
        .insert([user])
        .select()
    return data;
}
export const loginSelect = async(temp) => {
    let { data: loginData, error } = await supabase
        .from('loginData')
        .select("*")
        .eq("account", temp.account)
        .eq("password", temp.password)
        // .select('account,password')
    return(loginData)
}