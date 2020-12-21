let divElement = document.getElementById("element1");
let divController = document.getElementById("element2");

let headings = ["Roll no.","Name","Email Id"];
let limitValues = [10,20];

let ListFunc = function(element,students){

    this.currentPage = 1;
    this.limit = 10;
    this.totalPages = Math.ceil(students.length/this.limit);

    this.renderObj = function(){
        let table = document.createElement("table");
        table.setAttribute("border","1");
        let thead = document.createElement("thead");
        headings.map(function(heading){
            let th = document.createElement("th");
            th.setAttribute("class","table-heading");
            th.innerHTML = heading;
            thead.appendChild(th);
        });
        this.start = ((this.currentPage-1)*(this.limit));
        this.end = this.start + (this.limit-1);
        let tbody = document.createElement("tbody");
        for(let i=this.start;i<=this.end;i++){
            let data = students[i];
            let tr = document.createElement("tr");
            for(let key in data){
                let td = document.createElement("td");
                td.innerHTML = data[key];
                td.setAttribute("class","table-body-cell");
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        table.appendChild(thead);
        element.appendChild(table);    
    }

    this.prevPage = function(){
        if(this.currentPage == 1){
            return;
        }
        this.currentPage -= 1;
    }
    this.nextPage = function(){
        if(this.currentPage == this.totalPages){
            return;
        }
        this.currentPage += 1;
    }
    this.lastPage = function(){
        this.currentPage = this.totalPages;
    }
    this.firstPage = function(){
        this.currentPage = 1;
    }
    this.changeLimit = function(number){
        this.limit = number;
        this.totalPages = Math.ceil(students.length/this.limit);
        if(this.currentPage >this.totalPages){
            this.currentPage = 1;
            div.innerHTML = this.currentPage;
        }
        
    }
    
}




