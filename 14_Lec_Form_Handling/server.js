import express from 'express'

const app = express()



//  middleware for form handling
app.use(express.urlencoded({ extended: true }))

// home route
app.get('/', (req, res) => {
    res.render('index.ejs')  
})

//  form submit route
app.post('/form-submit', (req, res) => {
    console.log(req.body)

    res.json({
        message: "Your form has been submitted",
        success: true
    })
})

const port = 2000
app.listen(port, () => console.log(`Server is running on ${port}`))
