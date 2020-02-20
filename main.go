package main


import (
    "html/template"
    "net/http"
)



type Todo struct {
    Title string
    Password  string
}



type TodoPageData struct {
    PageTitle string
    Todos     []Todo
}



func main() {
    
    http.HandleFunc("/",servingMainPage)
    http.ListenAndServe(":8080", nil)
}


func servingMainPage(w http.ResponseWriter, r *http.Request) {
    tmpl := template.Must(template.ParseFiles("mainPage.html"))
        data := TodoPageData{
            PageTitle: "My User List",
            Todos: []Todo{
                {Title: "Saurabh suman", Password: "slfmsdfl"},
                // {Title: "Shivesh Safal", Password: "sfjsfkbsf"},
                // {Title: "Nehal Shaquib", Password: "sldflksdnf"},
            },
        }
        tmpl.Execute(w, data)
    }