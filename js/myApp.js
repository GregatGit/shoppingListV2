
let shoppingList = {
    items: [],  // will be an array of obj
    id: 0,
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'Other' ],
    listIndex: [],
    bought: [], // item index will be added as user shops
    allSelected: false,
    loadList: function() {
        shoppingList.listIndex.forEach(function(index){
            lists[index].list.forEach(function(item){
                let name = item[0];
                let category = item[1];
                let store = item[2];
                let weekly = item[3] || false;
                shoppingList.items.push({name: name, category: category, store: store, weekly: weekly, id: shoppingList.id, bought: false });
                shoppingList.id++;
            });
        });
    },
    loadOneItem: function (obj) {
        obj.id = this.id;
        this.id++;
        this.items.push(obj);
        view.showChoices(false);
        shoppingList.id++;
    }
};

let handlers = {
    showItems: function() {
        view.showChoices(true);
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
        view.showChoices(false);
    },
    displayChoosen: function(){
        view.removeMakeNewItems();
        view.yourList();
        view.removeEmptyList();
    },
    gotit: function(obj){
        //obj.parentElement.className = 'bought';
        console.log(obj.parentElement );
        let index = Number(obj.parentElement.id);
        shoppingList.bought.push(index);
        shoppingList.items[index].bought = true;
        document.getElementById(index).remove();
        view.removeEmptyList();
    },
    itemCreater: function() {
        view.makeNewItems();
    },
    addNewItem: function() {
        let name = document.getElementById('newItemName');
        let category = document.getElementById("categoryType").value;
        let store = document.getElementById("storeName").value;
        shoppingList.loadOneItem({name: name.value, category: category, store: store, weekly: true});
        name.value = '';
    },
    removeMakeNewItems: function() {
        view.removeMakeNewItems();
    },
    addListIndex: function(obj){
        let id = Number(obj.id);
        let index = shoppingList.listIndex.indexOf(id);
        if ( index === -1){
            shoppingList.listIndex.push(id);
        }else{
            shoppingList.listIndex.splice(index, 1);
        }
        console.log('shoppingList.listIndex', shoppingList.listIndex);
    },
    test: function() { // a function to make test on new buttons
        console.log('it works');
    }
};

let view = {
    startOptions: function() {
        document.getElementById('message').innerText = 'Select shopping list';
        message.className = "text-center";
        lists.forEach(function(item, position){
            let listButton = view.createButton(item.name, 'handlers.addListIndex(this)');
            listButton.id = position;
            document.getElementById('options').appendChild(listButton);
        });
        let loadListButton = view.createButton('Load List', 'handlers.showItems()' );
        document.getElementById('options').appendChild(loadListButton);
    },
    showChoices: function(listNeedsLoading) {
        if (listNeedsLoading){shoppingList.loadList();}
        document.getElementById('message').innerText = 'Choose items for your list';
        let choice = document.getElementById('options');
        choice.innerHTML = ''; // clear away anything
        this.createListHeaders(choice, shoppingList.shops);
        this.addItemsToLists('tickbox');
        let buttonText = shoppingList.allSelected ? 'Deselect All' : 'Select All';
        choice.appendChild(this.createButton(buttonText, 'handlers.selectAll()'));
        choice.appendChild(this.createButton('DONE', 'handlers.displayChoosen()'));
        choice.appendChild(this.createButton('ADD ITEMS', 'handlers.itemCreater()'));
    },
    yourList: function() {
        document.querySelector('h1').innerText = 'Your List';
        document.getElementById('message').innerText = 'Mark off items as you go';
        let choice = document.getElementById('options');
        choice.innerHTML = ''; // clear away anything
        this.createListHeaders(choice, shoppingList.shops);
        this.addItemsToLists('button',  'weekly'); // weekly tells you that its on this list
    },
    createListHeaders: function(idElement, arrHeaders) {
        arrHeaders.forEach(function(header){
            let list = document.createElement('div');
            let text = header.replace(/_/g, ' '); // replace '_' with ' '
            list.innerHTML = '<h2>' + text + '</h2>'; 
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
        list.forEach(function(item){
            let newLi = document.createElement('li');
            newLi.id = item.id;
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
        tickBox.className = "test";
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
    },
    makeNewItems: function() {
        document.getElementById('addItems').innerHTML = createNewItem;
    },
    removeMakeNewItems: function() {
        document.getElementById('addItems').innerHTML = '';
    },
    removeEmptyList: function() {
        shoppingList.shops.forEach(function(shop){
            let listHeader = document.getElementById(shop);
            if (listHeader) { // only check if that shop has a header
                let check = listHeader.hasChildNodes();
                if (!check) {
                    listHeader.parentElement.innerHTML = '';
                }
            }
        });
    }
};

view.startOptions();

