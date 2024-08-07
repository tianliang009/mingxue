import supabase from "./supabase"
import { fa, faker } from '@faker-js/faker'

export const getFakeUser = () => {
    return {
        id: Date.now(),
        name: faker.internet.userName(),
        account: faker.helpers.fromRegExp('13[0-9]14[5-7]15[0-3,5-9]17[0,3,5-8]'), // 账号
        date: faker.date.anytime(),
        status: faker.helpers.fromRegExp('[0-1]'),
        // avatar: faker.image.avatar(),
        // country: faker.location.country(),
        // company: faker.company.buzzPhrase(),
        // role: faker.person.jobTitle(),
    }
}
// export const getUsers = async() => {
//     let { data: user, error } = await supabase
//     .from('user')
//     .select('*')

//     return user;
// }

// export const insertUser = async(user) => {
//     const { data, error } = await supabase
//     .from('user')
//     .insert([user])
//     .select()

//     return data;
// }

// export const updateUser = async (newUser) => {
//     await supabase
//     .from('user')
//     .update({ ...newUser })
//     .eq('id', newUser.id)
//     .select()
// }

// export const deleteUser = async (id) => {
//     await supabase
//     .from('user')
//     .delete()
//     .eq('id', id)
// }

// 
// 
//

// 登录
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
// 数据
export const addUserData = async(user) => {
    const { data, error } = await supabase
        .from('personalUser_data')
        .insert([user])
        .select()
    // console.log(data,'---',error)
    return data;
}
// 茉莉绿芽 