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
    tmpl := template.Must(template.ParseFiles("mainPage.html"))
    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        data := TodoPageData{
            PageTitle: "My User List",
            Todos: []Todo{
                {Title: "Saurabh suman", Password: "slfmsdfl"},
                // {Title: "Shivesh Safal", Password: "sfjsfkbsf"},
                // {Title: "Nehal Shaquib", Password: "sldflksdnf"},
            },
        }
        tmpl.Execute(w, data)
    })
    http.ListenAndServe(":8080", nil)
}