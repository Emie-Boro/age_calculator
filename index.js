const express = require('express')
const app = express()
const cors = require('cors')
const date = new Date()

app.use(cors())

app.get('/', (req,res)=>{
    res.json({
        message: 'Welcome to my Calculator API',
        FG_3mtt:{
            name: 'Emiedonmukumo Dick-Boro',
            fellow_Id: 'FE/23/31241363',
            course: 'Software Development'
        },
        Url:{
            slash_separated: '/date/year/month/day',
            iso: '/date/year-month-day'
        }
    })
})

app.get('/date/', (req,res)=>{
    res.json({
        Urls:{
            slash_separated: '/date/year/month/day',
            iso: '/date/year-month-day'
        }
    })
})

app.get('/date/:y/:m/:d', (req,res)=>{
    try {
        const dateOfBirth = {
            year: req.params.y,
            month: req.params.m,
            day: req.params.d
        }
    
        const targetDate = new Date(dateOfBirth.year, dateOfBirth.month - 1, dateOfBirth.day)
        const birthDay = targetDate.getDate()
        const birthMonth = targetDate.toLocaleString('en-NG', { month: 'long' });
        const ageInMillisecond = date - targetDate;
        const ageInYears = ageInMillisecond / (1000 * 60 * 60 * 24 * 365.25)
        const years = Math.floor(ageInYears)
        const month = Math.floor((ageInYears - years) * 12)
        const days = Math.floor((ageInYears - years) * 365.25 % 30.44)

        res.status(200).json({
            age: age,
            years: years,
            month: month,
            days: days,
            birthDay: `${birthMonth} ${birthDay}`,
            dateOfBirth: targetDate.toDateString(),
            isBirthDayToday: date.getMonth() == targetDate.getMonth() && date.getDate() == birthDay ? true : false
        })
    } catch (error) {
        res.status(400).json({Error: error})
    }
})

app.get('/date/:y-:m-:d', (req,res)=>{
    try {
        const dateOfBirth = {
            year: req.params.y,
            month: req.params.m,
            day: req.params.d
        }
    
        const targetDate = new Date(dateOfBirth.year, dateOfBirth.month - 1, dateOfBirth.day)
        const birthDay = targetDate.getDate()
        const birthMonth = targetDate.toLocaleString('en-NG', { month: 'long' });
        const ageInMillisecond = date - targetDate;
        const ageInYears = ageInMillisecond / (1000 * 60 * 60 * 24 * 365.25)
        const years = Math.floor(ageInYears)
        const month = Math.floor((ageInYears - years) * 12)
        const days = Math.floor((ageInYears - years) * 365.25 % 30.44)

        res.status(200).json({
            age: age,
            years: years,
            month: month,
            days: days,
            birthDay: `${birthMonth} ${birthDay}`,
            dateOfBirth: targetDate.toDateString(),
            isBirthDayToday: date.getMonth() == targetDate.getMonth() && date.getDate() == birthDay ? true : false
        })
    } catch (error) {
        res.status(400).json({Error: error})
    }
})

app.listen(8080, ()=>{
    console.log('Server running...')
})