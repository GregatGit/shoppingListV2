
let shoppingList = {
    items: savedItems,  // will be an array of obj
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'other' ],
    allSelected: false,
};

let handlers = {
    showItems: function() {
        console.log(shoppingList.items);
        view.showChoices();
    },
    boxIsChecked: function(obj) {
        let index = Number(obj.parentElement.id);
        shoppingList.items[index].weekly = !shoppingList.items[index].weekly;
    },
    selectAll: function(){
        shoppingList.allSelected = !shoppingList.allSelected;
        shoppingList.items.forEach(function(item){
            item.weekly = shoppingList.allSelected;
        });
        view.showChoices();
    },
    displayChoosen: function(){
        view.yourList();
    },
    gotit: function(obj){
        obj.parentElement.className = 'bought';
        console.log(obj.parentElement );
    }
};

let view = {
    showChoices: function() {
        document.getElementById('message').innerText = 'Choose items for you list';
        let choice = document.getElementById('options');
        choice.innerHTML = ''; // clear away anything
        this.createListHeaders(choice, shoppingList.shops);
        this.addItemsToLists('tickbox');
        let buttonText = shoppingList.allSelected ? 'Deselect All' : 'Select All';
        choice.appendChild(this.createButton(buttonText, 'handlers.selectAll()'));
        choice.appendChild(this.createButton('DONE', 'handlers.displayChoosen()'));
    },
    yourList: function() {
        document.getElementById('message').innerText = 'Mark off items as you go';
        let choice = document.getElementById('options');
        choice.innerHTML = ''; // clear away anything
        this.createListHeaders(choice, shoppingList.shops);
        this.addItemsToLists('button',  'weekly'); // weekly tells you that its on this list
    },
    createListHeaders: function(idElement, arrHeaders) {
        arrHeaders.forEach(function(header){
            let list = document.createElement('div');
            list.innerHTML = '<h2>' + header + '</h2>' ;
            list.appendChild(view.buildUlHeader(header));
            idElement.appendChild(list);
        });// headings are loaded
    },
    buildUlHeader: function(id) {
        let newUlHeader = document.createElement('ul');
        newUlHeader.id = id;
        return newUlHeader;
    },
    addItemsToLists: function(type, toFilter ){
        let list = shoppingList.items; 
        if (toFilter){
            list = list.filter(function(item){
                return item[toFilter];
            });
        }
        list.forEach(function(item, position){
            let newLi = document.createElement('li');
            newLi.id = position;
            newLi.innerText = item.name;
            if (type === 'tickbox'){
                newLi.appendChild(this.addTickBox(item.weekly));
            }
            if (type === 'button'){
                newLi.appendChild(this.createButton('Got it', 'handlers.gotit(this)'));
            }
            let theList = document.getElementById(item.store);
            theList.appendChild(newLi);
        }, this);
    },
    addTickBox : function (checked) {
        var tickBox = document.createElement("INPUT");
        tickBox.setAttribute('type', 'checkbox');
        if (checked){
            tickBox.setAttribute('checked', 'true');
        }
        tickBox.setAttribute('onchange', 'handlers.boxIsChecked(this)');
        return tickBox;
    },
    createButton: function(text, func){
        let newButton = document.createElement('button');
        newButton.innerText = text;
        newButton.setAttribute('onclick', func);
        return newButton;
    }
};

