
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
    }
};

let view = {
    showChoices: function() {
        let choice = document.getElementById('options');
        choice.innerHTML = ''; // clear away anything

        shoppingList.shops.forEach(function(shop){
            let list = document.createElement('div');
            list.innerHTML = '<h2>' + shop + '</h2>' ;
            list.appendChild(view.buildUlHeader(shop));
            choice.appendChild(list);
        });// shop headings are loaded

        shoppingList.items.forEach(function(item, position){
            let newLi = document.createElement('li');
            newLi.id = position;
            newLi.innerText = item.name;
            newLi.appendChild(this.addTickBox(item.weekly));
            let theList = document.getElementById(item.store);
            theList.appendChild(newLi);
        }, this);
        let buttonText = shoppingList.allSelected ? 'Deselect All' : 'Select All';
        choice.appendChild(this.createButton(buttonText, 'handlers.selectAll()'));
    },
    buildUlHeader: function(id) {
        let newUlHeader = document.createElement('ul');
        newUlHeader.id = id;
        return newUlHeader;
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

