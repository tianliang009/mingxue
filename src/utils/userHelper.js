import supabase from "./supabase"
import { faker } from '@faker-js/faker'

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
export const getUserData = async(current, name, account, startTime, endTime, status, 
    accumulateMin, accumulateMax, balanceMin, balanceMax) => {
    let maxNum = 9223372036854775807n;
    let minNum = -9223372036854775808n;
    let { data: userData, error } = await supabase
        .from('user_data')
        .select(`*,user_money!inner(*)`)
        .like("name", `%${name || ''}%`)
        .like("account", `%${account || ''}%`)
        .gt("date", startTime || "0001-01-01 00:00:00")
        .lt("date", endTime || "9999-12-31 23:59:59")
        .like("status", `%${status || ''}%`)
        .gt("user_money.accumulate", accumulateMin || minNum)
        .lt("user_money.accumulate", accumulateMax || maxNum)
        .gt("user_money.balance", balanceMin || minNum)
        .lt("user_money.balance", balanceMax || maxNum)
        .range((current - 1) * 6, (current * 6) - 1)

        // .gt("user_money.balance", 5000)
        // .eq("status", status||'')
    return (userData);
}
export const getUserDataTotal = async() => {
    const { count, error } = await supabase
        .from('user_data')
        .select('*', { count: 'exact', head: true })
    return count;
}
export const updateUserData = async(item) => {
    let { data: updateData, error } = await supabase
        .from('user_data')
        .update({'status': item.status})
        .eq('id', item.id)
        // .select()
    return updateData;
}
export const addUserData = async(user) => {
    const { data, error } = await supabase
        .from('user_data')
        .insert([user])
        .select()
    // console.log(data,'---',error)
    return data;
}
export const addUserMoney = async(user) => {
    const { data, error } = await supabase
        .from('user_money')
        .insert([user])
        .select()
    return data;
}
// 数据_详情
export const addDetailData = async(user,str) => {
    const { data, error } = await supabase
        .from(str)
        .insert([user])
        .select()
    return data;
}
export const getDetailTotal = async(account, fromStr, eqStr) => {
    const { count, error } = await supabase
        .from(fromStr)
        .select('*', { count: 'exact', head: true })
        .eq(eqStr, account)
        // .eq(eqStr, account) || .eq(eqStr, account)
    return count;
}
export const getDetailDatas = async(account, current, fromStr, eqStr) => {
    let { data: detailData, error } = await supabase
        .from(fromStr)
        .select(`*`)
        .eq(eqStr, account)
        .range((current - 1) * 5, (current * 5) - 1)
    return (detailData)
}